package com.temp.hwilyric.user.service;

import com.temp.hwilyric.user.dto.MailDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MailService {

    private final JavaMailSender javaMailSender;

    public MailDto createMail(String email) {

        String msg = "";
        msg += "<div style='margin: 20px; width: 70%; text-align: center'>";
        msg += "<hr style='border: solid 5px #fbd5e0'/>";
        msg += "<br />";
        msg += "<br />";
        msg += "<img style='width: 15%' src='cid:HWILyric.png'/>";
        msg += "<h1>인증코드 안내 관련 이메일 입니다.</h1>";
        msg += "<br />";
        msg += "<br />";
        msg += "<p>안녕하세요.</p>";
        msg += "<p>휘리릭을 이용해 주셔서 진심으로 감사드립니다.</p>";
        msg += "<p>아래 코드를 입력하여 회원가입을 완료해 주세요.</p>";
        msg += "<br />";
        msg += "<div style='margin: 0 auto; text-align: center; width: 300px; border: 1px solid black; font-family: verdana; padding: 10px;'>";
        msg += "<div style='color: #765790; font-size: 130%'><strong>1234</strong></div>";
        msg += "</div>";
        msg += "</div>";

        MailDto mailDto = new MailDto();

        mailDto.setAddress(email);
        mailDto.setTitle("[HWILYric] 이메일 인증번호를 확인해주세요.");
        mailDto.setMessage(msg);
        return mailDto;
    }

}
