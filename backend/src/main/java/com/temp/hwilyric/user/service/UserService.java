package com.temp.hwilyric.user.service;

import com.temp.hwilyric.exception.DuplicateException;
import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.user.dto.InsertUserReq;
import com.temp.hwilyric.user.domain.User;
import com.temp.hwilyric.user.dto.LoginUserReq;
import com.temp.hwilyric.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;


@Slf4j // log를 사용하기 위한 어노테이션
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true) // 이 어노테이션을 붙이면 이 class 안에 있는 모든 메서드는 데이터를 읽기 전용으로 불러온다.
// 만약 데이터를 insert 하거나 update 하는 등 DB에 변경사항이 생겨야 하는 메서드의 경우 46번 줄에 있는 주석 참고해주세요!
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;


    // 이메일 중복체크
    public void duplicateEmail(String email) throws DuplicateException {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new DuplicateException("중복된 이메일입니다.");
        }
    }

    // 닉네임 중복체크
    public void duplicateNickname(String nickname) throws DuplicateException {
        if (userRepository.findByNickname(nickname).isPresent()) {
            throw new DuplicateException("중복된 닉네임입니다.");
        }

    }

    // DB가 변경되어야 하는 메서드에는 @Transactional 어노테이션을 붙여줘야 변화한다.
    @Transactional
    public void insertUser(InsertUserReq insertUserReq) throws DuplicateException {

        LocalDateTime createDate = LocalDateTime.now();

        // 사용자 비밀번호 암호화
        String password = bCryptPasswordEncoder.encode(insertUserReq.getPassword());

        User user = User.builder().insertUserReq(insertUserReq).createDate(createDate).password(password).build();

        // 이메일 중복 체크
        duplicateEmail(user.getEmail());

        // 닉네임 중복 체크
        duplicateNickname(user.getNickname());

        userRepository.save(user);
    }

    // 로그인
    public User loginUser(LoginUserReq loginUserReq) throws NotFoundException {
        User user = userRepository.findByEmail(loginUserReq.getEmail()).orElseThrow(() -> new NotFoundException("존재하지 않는 사용자입니다."));

        log.debug("로그인 시도한 사용자 : {}",user.toString());
        if(bCryptPasswordEncoder.matches(loginUserReq.getPassword(), user.getPassword())){
            return user;
        }
        else {
            throw new NotFoundException("비밀번호가 일치하지 않습니다.");
        }
    }

    // refresh 토큰 DB에 저장
    @Transactional
    public void saveRefreshToken(User user, String refreshToken){
        user.saveRefreshToken(refreshToken);
    }

}
