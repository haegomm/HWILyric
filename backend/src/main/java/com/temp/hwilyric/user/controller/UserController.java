package com.temp.hwilyric.user.controller;

import com.temp.hwilyric.exception.DuplicateException;
import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.exception.UnAuthorizedException;
import com.temp.hwilyric.jwt.AuthToken;
import com.temp.hwilyric.jwt.AuthTokenProvider;
import com.temp.hwilyric.oauth.domain.AppProperties;
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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
//    private final AuthService authService;
    private final MailService mailService;
//
    private final AuthTokenProvider tokenProvider;
    private final AppProperties appProperties;


    @ApiOperation(value = "이메일 중복체크") // Swagger에서 보이는 메서드 이름
    @GetMapping("/guests/email")
    public ResponseEntity<SuccessRes> duplicateEmail(@RequestBody DuplicateEmailReq duplicateEmailReq) throws DuplicateException {

        log.debug("중복체크 요청 이메일 = {}", duplicateEmailReq.getEmail());

        userService.duplicateEmail(duplicateEmailReq.getEmail());

        HttpStatus httpStatus = HttpStatus.OK;
        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, httpStatus);

    }
    
    @ApiOperation(value = "닉네임 중복체크")
    @GetMapping("/guests/nickname")
    public ResponseEntity<SuccessRes> duplicateNickname(@RequestBody DuplicateNicknameReq duplicateNicknameReq) throws DuplicateException {

        log.debug("중복체크 요청 닉네임 = {}", duplicateNicknameReq.getNickname());

        userService.duplicateNickname(duplicateNicknameReq.getNickname());

        HttpStatus httpStatus = HttpStatus.OK;
        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, httpStatus);
    }

    @ApiOperation(value = "회원가입")
    @PostMapping("/guests")
    public ResponseEntity<SuccessRes> insertUser(@Valid @RequestBody InsertUserReq insertUserReq) throws DuplicateException {

        log.debug("회원가입 정보 = {} ", insertUserReq.toString());

        userService.insertUser(insertUserReq);
        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);
    }

    @ApiOperation(value = "회원가입 시 email 인증코드 전송")
    @GetMapping("/guests/check")
    public ResponseEntity<SendSignupEmailRes> sendSignupEmail(@RequestBody SendSignupEmailReq sendSignupEmailReq) throws NotFoundException, MessagingException {
        MailDto mailDto = mailService.createSignupEmail(sendSignupEmailReq.getEmail());
        mailService.sendEmail(mailDto);

        SendSignupEmailRes sendSignupEmailRes = new SendSignupEmailRes(mailDto.getCode());

        return new ResponseEntity<>(sendSignupEmailRes, HttpStatus.OK);
    }

    @ApiOperation(value = "로그인")
    @PostMapping("/guests/login")
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


        return new ResponseEntity<LoginUserRes>(loginUserRes, status);
    }

    @ApiOperation(value = "임시 비밀번호 이메일 전송")
    @PatchMapping("/guests/password")
    public ResponseEntity<SuccessRes> sendTempPassword(@RequestBody SendTempPasswordReq sendTempPasswordReq) throws NotFoundException, MessagingException {
        MailDto mailDto = mailService.createTempPassword(sendTempPasswordReq.getEmail());
        String msg;

        // 일반 회원인 경우
        if(!mailDto.getCode().equals("KAKAO")) {
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
    @GetMapping("/users/logout")
    public ResponseEntity<SuccessRes> logoutUser(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws NotFoundException {
        User user = (User) httpServletRequest.getAttribute("user");

        userService.deleteRefreshToken(user.getId());
        CookieUtil.deleteCookie(httpServletRequest, httpServletResponse, REFRESH_TOKEN);

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

    @ApiOperation(value = "Access Token 재발급")
    @GetMapping("/users/access-token")
    public ResponseEntity<ReMakeAccessTokenRes> reMakeAccessToken(HttpServletRequest httpServletRequest) throws UnAuthorizedException {
        User user = (User) httpServletRequest.getAttribute("user");

        String refreshToken = CookieUtil.getCookie(httpServletRequest, REFRESH_TOKEN)
                .map(Cookie::getValue)
                .orElse(null);

        log.debug("쿠키에 담긴 refreshToken : {}", refreshToken);

        AuthToken authTokenRefreshToken = tokenProvider.convertAuthToken(refreshToken);

        if(authTokenRefreshToken.validate() == false || user.getRefreshToken() == null){
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
    @GetMapping("/users/password")
    public ResponseEntity<SuccessRes> checkPassword(@RequestBody CheckPasswordReq checkPasswordReq, HttpServletRequest httpServletRequest) throws NotFoundException {
        User user = (User) httpServletRequest.getAttribute("user");

        userService.checkPassword(user.getId(), checkPasswordReq.getPassword());

        SuccessRes successRes = SuccessRes.builder().message(SUCCESS).build();

        return new ResponseEntity<>(successRes, HttpStatus.OK);

    }

}
