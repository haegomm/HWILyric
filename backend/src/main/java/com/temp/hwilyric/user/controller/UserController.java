package com.temp.hwilyric.user.controller;

import com.temp.hwilyric.exception.DuplicateException;
import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.exception.UnAuthorizedException;
import com.temp.hwilyric.jwt.AuthToken;
import com.temp.hwilyric.jwt.AuthTokenProvider;
import com.temp.hwilyric.oauth.domain.AppProperties;
import com.temp.hwilyric.oauth.dto.KakaoLoginRes;
import com.temp.hwilyric.oauth.service.OAuthService;
import com.temp.hwilyric.user.domain.User;
import com.temp.hwilyric.user.dto.*;
import com.temp.hwilyric.user.service.MailService;
import com.temp.hwilyric.user.service.UserService;
import com.temp.hwilyric.util.CookieUtil;
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


@Slf4j // log 사용하기 위한 어노테이션
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Api(tags = {"사용자 API"}) // Swagger에서 보이는 controller 이름
public class UserController {

    private static final String SUCCESS = "success";
    private static final String REFRESH_TOKEN = "refreshToken";

    private final UserService userService;
    private final OAuthService oAuthService;
    private final MailService mailService;

    private final AuthTokenProvider tokenProvider;
    private final AppProperties appProperties;


    @ApiOperation(value = "이메일 중복체크") // Swagger에서 보이는 메서드 이름
    @GetMapping(value = "/guests/email/{email}")
    public ResponseEntity<SuccessRes> duplicateEmail(@PathVariable("email") String email) throws DuplicateException {

        log.debug("중복체크 요청 이메일 = {}", email);

        String msg = userService.duplicateEmail(email);

        SuccessRes successRes = SuccessRes.builder().message(msg).build();
        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

    @ApiOperation(value = "닉네임 중복체크")
    @GetMapping(value = "/guests/nickname/{nickname}")
    public ResponseEntity<SuccessRes> duplicateNickname(@PathVariable("nickname") String nickname) throws DuplicateException {

        log.debug("중복체크 요청 닉네임 = {}", nickname);

        userService.duplicateNickname(nickname);

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

    @ApiOperation(value = "회원가입")
    @PostMapping(value = "/guests", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<SuccessRes> insertUser(@Valid @RequestPart(value = "userInfo") InsertUserReq insertUserReq, @RequestPart(value = "profileImg", required = false) MultipartFile multipartFile) throws Exception, DuplicateException, NullPointerException {

        log.debug("회원가입 정보 = {} ", insertUserReq.toString());

        userService.insertUser(insertUserReq, multipartFile);
        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

    @ApiOperation(value = "회원가입 시 email 인증코드 전송")
    @GetMapping(value = "/guests/check/{email}")
    public ResponseEntity<SendSignupEmailRes> sendSignupEmail(@PathVariable("email") String email) throws NotFoundException, MessagingException {
        MailDto mailDto = mailService.createSignupEmail(email);
        mailService.sendEmail(mailDto);

        SendSignupEmailRes sendSignupEmailRes = SendSignupEmailRes.builder().code(mailDto.getCode()).build();

        return new ResponseEntity<>(sendSignupEmailRes, HttpStatus.OK);
    }

    @ApiOperation(value = "소셜 로그인-카카오")
    @GetMapping(value = "/guests/kakao/{code}")
    public ResponseEntity<KakaoLoginRes> kakaoLogin(@PathVariable("code") String code, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws NotFoundException, IllegalArgumentException {
        log.debug("카카오 로그인 시작!");

        String kakaoAccessToken = oAuthService.getKakaoAccessToken(code);

        return oAuthService.kakaoLogin(kakaoAccessToken, httpServletRequest, httpServletResponse);
    }

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
                appProperties.getAuth().getTokenSecret(),
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

    @ApiOperation(value = "로그아웃")
    @GetMapping(value = "/users/logout")
    public ResponseEntity<SuccessRes> logoutUser(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws NotFoundException {
        User user = (User) httpServletRequest.getAttribute("user");

        userService.deleteRefreshToken(user.getId());
        CookieUtil.deleteCookie(httpServletRequest, httpServletResponse, REFRESH_TOKEN);

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

    @ApiOperation(value = "Access Token 재발급")
    @GetMapping(value = "/users/access-token")
    public ResponseEntity<ReMakeAccessTokenRes> reMakeAccessToken(HttpServletRequest httpServletRequest) throws UnAuthorizedException {
        User user = (User) httpServletRequest.getAttribute("user");

        String refreshToken = CookieUtil.getCookie(httpServletRequest, REFRESH_TOKEN)
                .map(Cookie::getValue)
                .orElse(null);

        log.debug("쿠키에 담긴 refreshToken : {}", refreshToken);

        AuthToken authTokenRefreshToken = tokenProvider.convertAuthToken(refreshToken);

        if (authTokenRefreshToken.validate() == false || user.getRefreshToken() == null) {
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

    @ApiOperation(value = "비밀번호 일치 여부 확인")
    @PostMapping(value = "/users/password")
    public ResponseEntity<SuccessRes> checkPassword(@RequestBody CheckPasswordReq checkPasswordReq, HttpServletRequest httpServletRequest) throws NotFoundException {
        User user = (User) httpServletRequest.getAttribute("user");

        userService.checkPassword(user.getId(), checkPasswordReq.getPassword());

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

    @ApiOperation(value = "프로필 수정")
    @PatchMapping(value = "/users/profile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<UpdateUserRes> updateUser(@RequestPart(value = "userInfo") UpdateUserReq updateUserReq, @RequestPart(value = "profileImg") MultipartFile multipartFile, HttpServletRequest httpServletRequest) throws Exception, NotFoundException, DuplicateException, NullPointerException {
        User user = (User) httpServletRequest.getAttribute("user");
        UpdateUserRes updateUserRes = userService.updateUser(user.getId(), updateUserReq, multipartFile);

        return new ResponseEntity<>(updateUserRes, HttpStatus.OK);
    }

    @ApiOperation(value = "비밀번호 수정")
    @PatchMapping(value = "/users/password")
    public ResponseEntity<SuccessRes> updatePassword(@RequestBody UpdatePasswordReq updatePasswordReq, HttpServletRequest httpServletRequest){
        User user = (User) httpServletRequest.getAttribute("user");

        userService.updatePassword(user.getId(), updatePasswordReq);

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

}
