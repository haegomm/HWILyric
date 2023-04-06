package com.holorok.hwilyric.user.service;

import com.holorok.hwilyric.user.dto.MailDto;
import com.holorok.hwilyric.user.repository.UserRepository;
import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.user.domain.User;
import com.holorok.hwilyric.user.handler.MailHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import java.security.SecureRandom;

/**
 * 메일과 관련된 로직을 처리하는 서비스입니다
 */
@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MailService {

    // 인증 코드 생성 시 사용될 문자열
    private static final String CHARACTERS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    private static final String BR = "<br />";
    private static final String DIV = "</div>";
    private final JavaMailSender javaMailSender;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    
    private static SecureRandom random = new SecureRandom(); // 그냥 Random() 보다 강력한 친구

    /**
     * 인증코드를 이메일로 보내줍니다
     * @param email 인증코드를 보낼 이메일
     * @return 이메일로 전송된 인증코드
     */
    public MailDto createSignupEmail(String email) {

        String code = createKey(); // 인증코드 생성

        String msg = "";
        msg += "<div style='margin: 0 auto; width: 70%; text-align: center; border: solid 1px gray;'>";
        msg += "<img style='width: 100%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/thumbnail/default_thumbnail.png'/>";
        msg += BR;
        msg += BR;
        msg += "<h2>인증코드 안내 이메일 입니다.</h2>";
        msg += BR;
        msg += BR;
        msg += "<p>🎵 안녕하세요 🎵</p>";
        msg += BR;
        msg += "<p>휘리릭을 이용해 주셔서 진심으로 감사드립니다 💛</p>";
        msg += "<p>아래 코드를 입력하여 회원가입을 완료해 주세요!</p>";
        msg += BR;
        msg += "<div style='margin: 0 auto; text-align: center; width: 300px; border: none; font-family: verdana; padding: 10px;'>";
        msg += "<div style='font-size: 250%'><strong>";
        msg += code + "</strong></div>";
        msg += DIV;
        msg += BR;
        msg += BR;
        msg += "<hr>";
        msg += BR;
        msg += "<p style='color: gray'>본 메일은 발신전용 메일이므로 답장을 통한 문의는 처리되지 않습니다.</p>";
        msg += BR;
        msg += "<img style='width: 25%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png'/>";
        msg += BR;
        msg += BR;
        msg += DIV;

        MailDto mailDto = new MailDto();

        mailDto.setAddress(email);
        mailDto.setTitle("[HWILyric] 이메일 인증코드를 확인해주세요.");
        mailDto.setMessage(msg);
        mailDto.setCode(code);
        return mailDto;
    }

    /**
     * 비밀 번호를 리셋하여 이메일로 전송해줍니다
     * @param email 리셋된 비밀 번호를 전송받을 이메일
     * @return
     */
    @Transactional
    public MailDto createTempPassword(String email) {

        User user = userRepository.findByEmail(email).orElseThrow(() -> new NotFoundException("존재하지 않는 사용자입니다."));

        String code = createKey(); // 임시 비밀번호 생성

        // 카카오 회원인 경우
        if (user.getUserType().equals("KAKAO")) {
            code = "KAKAO";
        }
        // 일반 회원이 경우
        else {
            user.updatePassword(bCryptPasswordEncoder.encode(code));
        }
        String msg = "";
        msg += "<div style='margin: 0 auto; width: 70%; text-align: center; border: solid 1px gray;'>";
        msg += "<img style='width: 100%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/thumbnail/default_thumbnail.png'/>";
        msg += BR;
        msg += BR;
        msg += "<h1>임시 비밀번호 안내 이메일 입니다.</h1>";
        msg += BR;
        msg += BR;
        msg += "<p>🎵 안녕하세요 🎵</p>";
        msg += BR;
        msg += "<p>휘리릭을 이용해 주셔서 진심으로 감사드립니다 💛</p>";
        msg += "<p>아래 임시 비밀번호로 로그인 후 비밀번호 변경을 해주세요!</p>";
        msg += BR;
        msg += "<div style='margin: 0 auto; text-align: center; width: 300px; border: none; font-family: verdana; padding: 10px;'>";
        msg += "<div style='color: #765790; font-size: 250%'><strong>";
        msg += code + "</strong></div>";
        msg += DIV;
        msg += BR;
        msg += BR;
        msg += "<hr>";
        msg += BR;
        msg += "<p style='color: gray'>본 메일은 발신전용 메일이므로 답장을 통한 문의는 처리되지 않습니다.</p>";
        msg += BR;
        msg += "<img style='width: 25%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png'/>";
        msg += BR;
        msg += BR;
        msg += DIV;

        MailDto mailDto = new MailDto();

        mailDto.setAddress(email);
        mailDto.setTitle("[HWILyric] 임시 비밀번호를 확인해주세요.");
        mailDto.setMessage(msg);
        mailDto.setCode(code);
        return mailDto;
    }

    /**
     * 인증코드, 임시 비밀번호를 생성해줍니다
     * @return 생성된 코드
     */
    public static String createKey() {
        StringBuilder key = new StringBuilder();

        // CHARACTERS 상수는 인증 코드에서 사용할 수 있는 문자들(숫자, 영어 대소문자, 특수문자)을 모두 포함함.
        for (int i = 0; i < 8; i++) {
            key.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
        }

        return key.toString();
    }

    /**
     * 실제 메일을 보내줍니다
     * @param mailDto 메일로 보낼 데이터
     * @throws NotFoundException
     * @throws MessagingException
     */
    public void sendEmail(MailDto mailDto) throws NotFoundException, MessagingException {
        MailHandler mailHandler = new MailHandler(javaMailSender);

        mailHandler.setTo(mailDto.getAddress());
        mailHandler.setSubject(mailDto.getTitle());
        mailHandler.setText(mailDto.getMessage(), true);
        mailHandler.send();
    }

}
