package com.holorok.hwilyric.user.controller;

import com.holorok.hwilyric.common.SuccessRes;
import com.holorok.hwilyric.jwt.AuthToken;
import com.holorok.hwilyric.jwt.AuthTokenProvider;
import com.holorok.hwilyric.oauth.domain.AppProperties;
import com.holorok.hwilyric.oauth.dto.KakaoLoginRes;
import com.holorok.hwilyric.oauth.service.OAuthService;
import com.holorok.hwilyric.user.dto.*;
import com.holorok.hwilyric.util.CookieUtil;
import com.holorok.hwilyric.exception.DuplicateException;
import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.exception.UnAuthorizedException;
import com.holorok.hwilyric.user.domain.User;
import com.holorok.hwilyric.user.service.MailService;
import com.holorok.hwilyric.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Date;


@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Api(tags = {"사용자 API"})
public class UserController {

    private static final String SUCCESS = "success";
    private static final String REFRESH_TOKEN = "refreshToken";

    private final UserService userService;
    private final OAuthService oAuthService;
    private final MailService mailService;

    private final AuthTokenProvider tokenProvider;
    private final AppProperties appProperties;


    /**
     * 이메일 중복 체크
     * @param email 중복 체크 할 이메일
     * @return 성공 시 success 반환
     * @throws DuplicateException
     */
    @ApiOperation(value = "이메일 중복체크")
    @GetMapping(value = "/guests/email/{email}")
    public ResponseEntity<SuccessRes> duplicateEmail(@PathVariable("email") String email) throws DuplicateException {

        log.debug("중복체크 요청 이메일 = {}", email);

        String msg = userService.duplicateEmail(email);

        SuccessRes successRes = SuccessRes.builder().message(msg).build();
        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

    /**
     * 닉네임 중복 체크
     * @param nickname 중복 체크 할 닉네임
     * @return 성공 시 success 반환
     * @throws DuplicateException
     */
    @ApiOperation(value = "닉네임 중복체크")
    @GetMapping(value = "/guests/nickname/{nickname}")
    public ResponseEntity<SuccessRes> duplicateNickname(@PathVariable("nickname") String nickname) throws DuplicateException {

        log.debug("중복체크 요청 닉네임 = {}", nickname);

        userService.duplicateNickname(nickname);

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

    /**
     * 사용자가 입력한 정보를 DB에 insert한다
     * @param insertUserReq 사용자가 입력한 정보
     * @param multipartFile 사용자가 업로드 한 프로필 사진
     * @return 성공 시 success를 반환
     * @throws Exception
     * @throws DuplicateException
     * @throws NullPointerException
     */
    @ApiOperation(value = "회원가입")
    @PostMapping(value = "/guests", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<SuccessRes> insertUser(@Valid @RequestPart(value = "userInfo") InsertUserReq insertUserReq, @RequestPart(value = "profileImg", required = false) MultipartFile multipartFile) throws Exception, DuplicateException, NullPointerException {

        log.debug("회원가입 정보 = {} ", insertUserReq.toString());

        userService.insertUser(insertUserReq, multipartFile);
        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

    /**
     * 회원 가입 시 이메일 인증 코드를 발송합니다
     * @param email 인증 코드를 발송할 이메일
     * @return 성공 시 발송된 코드를 반환합니다
     * @throws NotFoundException
     * @throws MessagingException
     */
    @ApiOperation(value = "회원가입 시 email 인증코드 전송")
    @GetMapping(value = "/guests/check/{email}")
    public ResponseEntity<SendSignupEmailRes> sendSignupEmail(@PathVariable("email") String email) throws NotFoundException, MessagingException {
        MailDto mailDto = mailService.createSignupEmail(email);
        mailService.sendEmail(mailDto);

        SendSignupEmailRes sendSignupEmailRes = SendSignupEmailRes.builder().code(mailDto.getCode()).build();

        return new ResponseEntity<>(sendSignupEmailRes, HttpStatus.OK);
    }

    /**
     * 소셜 로그인 요청을 처리해줍니다
     * @param code 소셜 로그인 요청으로 받아온 인가 코드
     * @param httpServletRequest
     * @param httpServletResponse
     * @return 성공 시 상시 노출되어야 하는 사용자 정보를 반환합니다
     * @throws NotFoundException
     * @throws IllegalArgumentException
     */
    @ApiOperation(value = "소셜 로그인-카카오")
    @GetMapping(value = "/guests/kakao/{code}")
    public ResponseEntity<KakaoLoginRes> kakaoLogin(@PathVariable("code") String code, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws NotFoundException, IllegalArgumentException {
        log.debug("카카오 로그인 시작!");

        String kakaoAccessToken = oAuthService.getKakaoAccessToken(code);

        return oAuthService.kakaoLogin(kakaoAccessToken, httpServletRequest, httpServletResponse);
    }

    /**
     * 로그인 요청이 들어오면 로그인 처리해줍니다
     * @param loginUserReq 로그인 요청한 사용자의 이메일, 비밀 번호
     * @param httpServletRequest
     * @param httpServletResponse
     * @return 성공 시 상시 노출되어야 하는 사용자 정보를 반환합니다
     * @throws NotFoundException
     */
    @ApiOperation(value = "로그인")
    @PostMapping(value = "/guests/login")
    public ResponseEntity<LoginUserRes> loginUser(@RequestBody LoginUserReq loginUserReq, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws NotFoundException {
        log.debug("로그인 요청 들어옴.");

        HttpStatus status = null;
        LoginUserRes loginUserRes = null;

        User loginUser = userService.loginUser(loginUserReq);

        Date now = new Date();

        AuthToken accessToken = tokenProvider.createAuthToken(
                loginUser.getId(),
                "ROLE_USER",
                new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
        );


        long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();


        AuthToken refreshToken = tokenProvider.createAuthToken(
                new Date(now.getTime() + refreshTokenExpiry)
        );

        log.debug("일반 로그인 user id(PK) : {}, 닉네임 : {}", loginUser.getId(), loginUser.getNickname());
        log.debug("일반 user 로그인 accessToken 정보 : {}", accessToken.getToken());
        log.debug("일반 user 로그인 refreshToken 정보 : {}", refreshToken.getToken());


        userService.saveRefreshToken(loginUser, refreshToken.getToken());

        loginUserRes = LoginUserRes.builder()
                .nickname(loginUser.getNickname())
                .profileImg(loginUser.getProfileImg())
                .userType(loginUser.getUserType())
                .accessToken(accessToken.getToken())
                .build();


        int cookieMaxAge = (int) refreshTokenExpiry / 60;


        CookieUtil.deleteCookie(httpServletRequest, httpServletResponse, REFRESH_TOKEN);

        CookieUtil.addCookie(httpServletResponse, REFRESH_TOKEN, refreshToken.getToken(), cookieMaxAge);

        status = HttpStatus.OK;


        return new ResponseEntity<>(loginUserRes, status);
    }

    /**
     * 임시 비밀번호 이메일로 전송합니다
     * @param sendTempPasswordReq 임시 비밀번호를 전송할 이메일
     * @return 성공 시 success를 반환합니다
     * @throws NotFoundException
     * @throws MessagingException
     */
    @ApiOperation(value = "임시 비밀번호 이메일 전송")
    @PatchMapping(value = "/guests/password")
    public ResponseEntity<SuccessRes> sendTempPassword(@RequestBody SendTempPasswordReq sendTempPasswordReq) throws NotFoundException, MessagingException {
        MailDto mailDto = mailService.createTempPassword(sendTempPasswordReq.getEmail());
        String msg;

        // 일반 회원인 경우
        if (!mailDto.getCode().equals("KAKAO")) {
            mailService.sendEmail(mailDto);
            msg = SUCCESS;
        }
        // 카카오 회원인 경우
        else {
            msg = "KAKAO";
        }
        SuccessRes successRes = SuccessRes.builder().message(msg).build();
        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

    /**
     * 사용자가 로그아웃 요청을 하면 DB에서 refresh token을 삭제하고 쿠키 값을 삭제하여 로그아웃 처리합니다
     * @param httpServletRequest
     * @param httpServletResponse
     * @return 성공 시 success를 반환합니다
     * @throws NotFoundException
     */
    @ApiOperation(value = "로그아웃")
    @GetMapping(value = "/users/logout")
    public ResponseEntity<SuccessRes> logoutUser(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws NotFoundException {
        User user = (User) httpServletRequest.getAttribute("user");

        userService.deleteRefreshToken(user.getId());
        CookieUtil.deleteCookie(httpServletRequest, httpServletResponse, REFRESH_TOKEN);

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

    /**
     * access token 재발급 요청 시 재발급합니다
     * @param httpServletRequest
     * @return 성공 시 재발급된 access toekn을 반환합니다
     * @throws UnAuthorizedException
     */
    @ApiOperation(value = "Access Token 재발급")
    @GetMapping(value = "/users/access-token")
    public ResponseEntity<ReMakeAccessTokenRes> reMakeAccessToken(HttpServletRequest httpServletRequest) throws UnAuthorizedException {
        User user = (User) httpServletRequest.getAttribute("user");

        String refreshToken = CookieUtil.getCookie(httpServletRequest, REFRESH_TOKEN)
                .map(Cookie::getValue)
                .orElse(null);

        log.debug("쿠키에 담긴 refreshToken : {}", refreshToken);

        AuthToken authTokenRefreshToken = tokenProvider.convertAuthToken(refreshToken);

        if (!authTokenRefreshToken.validate() || user.getRefreshToken() == null) {
            log.debug("유효하지 않은 refresh token 입니다.");
            throw new UnAuthorizedException("유효하지 않은 refresh token 입니다.");
        }

        Date now = new Date();


        AuthToken accessToken = tokenProvider.createAuthToken(
                user.getId(),
                "ROLE_USER",
                new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
        );

        log.debug("정상적으로 액세스토큰 재발급!!!");

        ReMakeAccessTokenRes reMakeAccessTokenRes = ReMakeAccessTokenRes.builder().accessToken(accessToken.getToken()).build();

        return new ResponseEntity<>(reMakeAccessTokenRes, HttpStatus.OK);
    }

    /**
     * DB에 저장된 비밀 번호와 사용자가 입력한 비밀 번호 일치 여부를 확인합니다
     * @param checkPasswordReq
     * @param httpServletRequest
     * @return 성공 시 success를 반환합니다
     * @throws NotFoundException
     */
    @ApiOperation(value = "비밀번호 일치 여부 확인")
    @PostMapping(value = "/users/password")
    public ResponseEntity<SuccessRes> checkPassword(@RequestBody CheckPasswordReq checkPasswordReq, HttpServletRequest httpServletRequest) throws NotFoundException {
        User user = (User) httpServletRequest.getAttribute("user");

        userService.checkPassword(user.getId(), checkPasswordReq.getPassword());

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

    /**
     * 사용자가 입력한 정보를 DB에 update 합니다
     * @param updateUserReq
     * @param multipartFile
     * @param httpServletRequest
     * @return 성공 시 상시 화면에 노출되어야 하는 정보를 반환합니다
     * @throws Exception
     * @throws NotFoundException
     * @throws DuplicateException
     * @throws NullPointerException
     */
    @ApiOperation(value = "프로필 수정")
    @PatchMapping(value = "/users/profile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<UpdateUserRes> updateUser(@RequestPart(value = "userInfo") UpdateUserReq updateUserReq, @RequestPart(value = "profileImg", required = false) MultipartFile multipartFile, HttpServletRequest httpServletRequest) throws Exception, NotFoundException, DuplicateException, NullPointerException {
        User user = (User) httpServletRequest.getAttribute("user");
        UpdateUserRes updateUserRes = userService.updateUser(user.getId(), updateUserReq, multipartFile);

        return new ResponseEntity<>(updateUserRes, HttpStatus.OK);
    }

    /**
     * 사용자가 입력한 비밀 번호를 DB에 반영합니다
     * @param updatePasswordReq
     * @param httpServletRequest
     * @return 성공 시 success를 반환합니다
     */
    @ApiOperation(value = "비밀번호 수정")
    @PatchMapping(value = "/users/password")
    public ResponseEntity<SuccessRes> updatePassword(@RequestBody UpdatePasswordReq updatePasswordReq, HttpServletRequest httpServletRequest){
        User user = (User) httpServletRequest.getAttribute("user");

        userService.updatePassword(user.getId(), updatePasswordReq);

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

}
