package com.temp.hwilyric.user.controller;

import com.temp.hwilyric.exception.DuplicateException;
import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.user.dto.*;
import com.temp.hwilyric.user.service.MailService;
import com.temp.hwilyric.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;


@Slf4j // log 사용하기 위한 어노테이션
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Api(tags = {"사용자 API"}) // Swagger에서 보이는 controller 이름
public class UserController {

    private static final String SUCCESS = "success";

    private final UserService userService;
//    private final AuthService authService;
    private final MailService mailService;
//
//    private final AuthTokenProvider tokenProvider;
//    private final AppProperties appProperties;


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

    @ApiOperation(value = "회원가입 시 email 인증코드 발송")
    @GetMapping("/guests/check")
    public ResponseEntity<SendSignupEmailRes> sendSignupEmail(@RequestBody SendSignupEmailReq sendSignupEmailReq) throws NotFoundException, MessagingException {
        MailDto mailDto = mailService.createMail(sendSignupEmailReq.getEmail());
        mailService.sendEmail(mailDto);

        SendSignupEmailRes sendSignupEmailRes = new SendSignupEmailRes(mailDto.getCode());

        return new ResponseEntity<>(sendSignupEmailRes, HttpStatus.OK);
    }

}
