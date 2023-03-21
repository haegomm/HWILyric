package com.temp.hwilyric.user.service;

import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.user.domain.User;
import com.temp.hwilyric.user.dto.MailDto;
import com.temp.hwilyric.user.handler.MailHandler;
import com.temp.hwilyric.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import java.util.Random;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MailService {

    private static char[] special_mark = {'~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '|'}; // 비밀번호 or 코드 전송 시 필요한 특수문자 목록

    private final JavaMailSender javaMailSender;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    // 회원가입용 이메일
    public MailDto createSignupEmail(String email) {

        String code = createKey(); // 인증코드 생성

        String msg = "";
        msg += "<div style='margin: 20px; width: 70%; text-align: center'>";
        msg += "<hr style='border: solid 5px #B0E3F9'/>";
        msg += "<img style='width: 100%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_banner.png'/>"; // 해당 경로는 S3에 올린 후 변경 예정
        msg += "<br />";
        msg += "<br />";
        msg += "<h2>인증코드 안내 이메일 입니다.</h2>";
        msg += "<br />";
        msg += "<br />";
        msg += "<p>🎵 안녕하세요 🎵</p>";
        msg += "<br />";
        msg += "<p>휘리릭을 이용해 주셔서 진심으로 감사드립니다 💛</p>";
        msg += "<p>아래 코드를 입력하여 회원가입을 완료해 주세요!</p>";
        msg += "<br />";
        msg += "<div style='margin: 0 auto; text-align: center; width: 300px; border: none; font-family: verdana; padding: 10px;'>";
        msg += "<div style='font-size: 130%'><strong>";
        msg += code + "</strong></div>";
        msg += "</div>";
        msg += "<br />";
        msg += "<br />";
        msg += "<img style='width: 25%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png'/>";
        msg += "<br />";
        msg += "<br />";
        msg += "<hr style='border: solid 5px #B0E3F9'/>";
        msg += "</div>";

        MailDto mailDto = new MailDto();

        mailDto.setAddress(email);
        mailDto.setTitle("[HWILyric] 이메일 인증코드를 확인해주세요.");
        mailDto.setMessage(msg);
        mailDto.setCode(code);
        return mailDto;
    }

    // 임시 비밀번호 생성
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
        msg += "<div style='margin: 20px; width: 70%; text-align: center'>";
        msg += "<hr style='border: solid 5px #B0E3F9'/>";
        msg += "<img style='width: 100%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_banner.png'/>"; // 해당 경로는 S3에 올린 후 변경 예정
        msg += "<br />";
        msg += "<br />";
        msg += "<h1>임시 비밀번호 안내 이메일 입니다.</h1>";
        msg += "<br />";
        msg += "<br />";
        msg += "<p>🎵 안녕하세요 🎵</p>";
        msg += "<br />";
        msg += "<p>휘리릭을 이용해 주셔서 진심으로 감사드립니다 💛</p>";
        msg += "<p>아래 임시 비밀번호로 로그인 후 비밀번호 변경을 해주세요!</p>";
        msg += "<br />";
        msg += "<div style='margin: 0 auto; text-align: center; width: 300px; border: none; font-family: verdana; padding: 10px;'>";
        msg += "<div style='color: #765790; font-size: 130%'><strong>";
        msg += code + "</strong></div>";
        msg += "</div>";
        msg += "<br />";
        msg += "<br />";
        msg += "<img style='width: 25%' src='https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png'/>";
        msg += "<br />";
        msg += "<br />";
        msg += "<hr style='border: solid 5px #B0E3F9'/>";
        msg += "</div>";

        MailDto mailDto = new MailDto();

        mailDto.setAddress(email);
        mailDto.setTitle("[HWILyric] 임시 비밀번호를 확인해주세요.");
        mailDto.setMessage(msg);
        mailDto.setCode(code);
        return mailDto;
    }

    // 인증코드 생성
    public static String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) { // 인증코드 8자리
            int index = rnd.nextInt(4); // 0~2 까지 랜덤
            int special_len = special_mark.length; // 특수문자 배열 길이

            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
                case 3:
                    key.append(special_mark[rnd.nextInt(special_len)]);
                    break;
            }
        }
        return key.toString();
    }

    public void sendEmail(MailDto mailDto) throws NotFoundException, MessagingException {
        MailHandler mailHandler = new MailHandler(javaMailSender);

        mailHandler.setTo(mailDto.getAddress());
        mailHandler.setSubject(mailDto.getTitle());
        mailHandler.setText(mailDto.getMessage(), true);
        mailHandler.send();
    }

}
