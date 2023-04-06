package com.holorok.hwilyric.user.service;

import com.holorok.hwilyric.common.AwsService;
import com.holorok.hwilyric.user.dto.*;
import com.holorok.hwilyric.user.repository.UserRepository;
import com.holorok.hwilyric.exception.DuplicateException;
import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.user.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;


/**
 * User 관련 로직을 처리하는 서비스입니다
 * 
 */
@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AwsService awsService;

    private static final String NOT_FOUND_USER = "존재하지 않는 사용자입니다.";
    private static final String PROFILE = "profile";


    /**
     * 요청 온 이메일을 DB에서 중복체크하여 중복된 경우에는 DuplicateException을 throw 합니다.
     * @param email 중복체크 요청한 이메일
     * @return
     * @throws DuplicateException
     */
    public String duplicateEmail(String email) throws DuplicateException {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user != null) {
            if (user.getUserType().equals("KAKAO")) {
                return "KAKAO";
            }
            throw new DuplicateException("중복된 이메일입니다.");
        }
        return "success";
    }

    /**
     * 요청 온 닉네임을 DB에서 중복체크하여 중복된 경우에는 DuplicateException을 throw 합니다
     * @param nickname nickname 중복체크 요청한 닉네임
     * @throws DuplicateException
     */
    public void duplicateNickname(String nickname) throws DuplicateException {
        if (userRepository.findByNickname(nickname).isPresent()) {
            throw new DuplicateException("중복된 닉네임입니다.");
        }

    }

    /**
     * DB에 사용자 정보를 저장합니다
     * @param insertUserReq 회원 가입 form에 사용자가 입력한 정보
     * @param multipartFile 회원 가입 시 사용자가 등록한 프로필 사진
     * @throws Exception
     * @throws DuplicateException
     * @throws NullPointerException
     */
    @Transactional
    public void insertUser(InsertUserReq insertUserReq, MultipartFile multipartFile) throws Exception, DuplicateException, NullPointerException {


        String profileImg = "https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/%EC%A0%9C%EB%A6%AC%EC%9D%B8%EC%82%AC-%EC%A1%B4%EC%A4%91.gif";
        log.debug("사용자가 넘겨준 프사가 null인가? {}", multipartFile == null);


        if (multipartFile != null) {
            log.debug("프사가 null이 아니네!!");
            profileImg = awsService.upload(multipartFile, PROFILE);
        }


        String password = bCryptPasswordEncoder.encode(insertUserReq.getPassword());

        User user = User.builder().insertUserReq(insertUserReq).password(password).profileImg(profileImg).build();

        userRepository.save(user);
    }

    /**
     * 로그인 요청한 정보와 DB에 저장된 정보가 일치하는지 확인합니다
     * @param loginUserReq 사용자가 입력한 이메일과 비밀번호
     * @return 성공 시 해당 사용자의 정보 중 화면에 상시 노출되어야 하는 정보를 User 객체로 반환합니다
     * @throws NotFoundException
     */
    public User loginUser(LoginUserReq loginUserReq) throws NotFoundException {
        User user = userRepository.findByEmail(loginUserReq.getEmail()).orElseThrow(() -> new NotFoundException(NOT_FOUND_USER));

        log.debug("로그인 시도한 사용자 : {}", user.toString());
        if (bCryptPasswordEncoder.matches(loginUserReq.getPassword(), user.getPassword())) {
            return user;
        } else {
            throw new NotFoundException("비밀번호가 일치하지 않습니다.");
        }
    }

    /**
     * 발급된 refresh token을 DB에 저장합니다
     * @param user refresh token을 저장할 사용자
     * @param refreshToken DB에 저장할 refresh token
     */
    @Transactional
    public void saveRefreshToken(User user, String refreshToken) {
        user.saveRefreshToken(refreshToken);
    }

    /**
     * 로그아웃 시 호출되는 메서드로 DB에 저장된 refresh token을 삭제합니다
     * @param id refresh toekn을 삭제할  id(user table PK)
     */ 
    @Transactional
    public void deleteRefreshToken(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException(NOT_FOUND_USER));
        user.deleteRefreshToken();
    }

    /**
     * 비밀 번호가 일치하는지 확인합니다
     * @param id 비밀 번호를 확인할 user table의 PK
     * @param password 사용자가 입력한 비밀 번호
     * @throws NotFoundException
     */
    public void checkPassword(Long id, String password) throws NotFoundException {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException(NOT_FOUND_USER));
        if (!bCryptPasswordEncoder.matches(password, user.getPassword())) {
            throw new NotFoundException("비밀번호가 일치하지 않습니다.");
        }
    }


    /**
     * 사용자가 입력한 정보를 DB에 update 해줍니다
     * @param id update할 사용자의 id(user table PK)
     * @param updateUserReq 수정할 닉네임
     * @param multipartFile 수정할 프로필 사진
     * @return DB에 update된 정보를 반환합니다
     * @throws Exception
     * @throws NotFoundException
     * @throws DuplicateException
     * @throws NullPointerException
     */
    @Transactional
    public UpdateUserRes updateUser(Long id, UpdateUserReq updateUserReq, MultipartFile multipartFile) throws Exception, NotFoundException, DuplicateException, NullPointerException {

        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException(NOT_FOUND_USER));


        String nickname = user.getNickname();

        if (!updateUserReq.getNickname().equals(nickname)) {
            log.debug("기존 닉네임이랑 달라!!! 닉네임 중복체크 하러 들어옴");
            duplicateNickname(updateUserReq.getNickname());
            nickname = updateUserReq.getNickname();

        }

        String profileImg = user.getProfileImg();

        if (multipartFile != null) {
            log.debug("프사 수정했네!");
            profileImg = awsService.upload(multipartFile, PROFILE);
        }

        user.updateUser(nickname, profileImg);

        return UpdateUserRes.builder().nickname(updateUserReq.getNickname()).profileImg(profileImg).build();

    }

    /**
     * 변경된 비밀 번호를 DB에 반영합니다
     * @param id 비밀 번호를 변경할 id (user table PK)
     * @param updatePasswordReq 변경할 비밀 번호
     */
    @Transactional
    public void updatePassword(Long id, UpdatePasswordReq updatePasswordReq) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException(NOT_FOUND_USER));


        if (updatePasswordReq.getPassword() != null) {
            String password = bCryptPasswordEncoder.encode(updatePasswordReq.getPassword());
            user.updatePassword(password);
        }

    }

}