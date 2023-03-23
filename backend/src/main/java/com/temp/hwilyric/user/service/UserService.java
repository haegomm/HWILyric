package com.temp.hwilyric.user.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.temp.hwilyric.exception.DuplicateException;
import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.user.dto.*;
import com.temp.hwilyric.user.domain.User;
import com.temp.hwilyric.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Slf4j // log를 사용하기 위한 어노테이션
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true) // 이 어노테이션을 붙이면 이 class 안에 있는 모든 메서드는 데이터를 읽기 전용으로 불러온다.
// 만약 데이터를 insert 하거나 update 하는 등 DB에 변경사항이 생겨야 하는 메서드의 경우 46번 줄에 있는 주석 참고해주세요!
public class UserService {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket; // S3 버킷 이름

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;
    private final AmazonS3Client amazonS3Client;


    // 이메일 중복체크
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

    // 닉네임 중복체크
    public void duplicateNickname(String nickname) throws DuplicateException {
        if (userRepository.findByNickname(nickname).isPresent()) {
            throw new DuplicateException("중복된 닉네임입니다.");
        }

    }

    // 일반 사용자 회원가입
    @Transactional
    public void insertUser(InsertUserReq insertUserReq, MultipartFile multipartFile) throws Exception, DuplicateException, NullPointerException {

        // 사용자가 프로필 사진 업로드 하지 않으면 주어지는 default 프사
        String profileImg = "https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png";
        log.debug("사용자가 넘겨준 프사가 null인가? {}", multipartFile == null);

        // 만약 사용자가 프사를 업로드 한 경우
        if (multipartFile != null) {
            log.debug("프사가 null이 아니네!!");
            profileImg = upload(multipartFile); // 프로필 이미지 업로드
        }

        LocalDateTime createDate = LocalDateTime.now();

        // 사용자 비밀번호 암호화
        String password = bCryptPasswordEncoder.encode(insertUserReq.getPassword());

        User user = User.builder().insertUserReq(insertUserReq).createDate(createDate).password(password).profileImg(profileImg).build();

        userRepository.save(user);
    }

    // 로그인
    public User loginUser(LoginUserReq loginUserReq) throws NotFoundException {
        User user = userRepository.findByEmail(loginUserReq.getEmail()).orElseThrow(() -> new NotFoundException("존재하지 않는 사용자입니다."));

        log.debug("로그인 시도한 사용자 : {}", user.toString());
        if (bCryptPasswordEncoder.matches(loginUserReq.getPassword(), user.getPassword())) {
            return user;
        } else {
            throw new NotFoundException("비밀번호가 일치하지 않습니다.");
        }
    }

    // refresh 토큰 DB에 저장 - 로그인용
    @Transactional
    public void saveRefreshToken(User user, String refreshToken) {
        user.saveRefreshToken(refreshToken);
    }

    // refresh 토큰 DB에서 삭제 - 로그아웃용
    @Transactional
    public void deleteRefreshToken(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("존재하지 않는 사용자입니다."));
        user.deleteRefreshToken();
    }

    // 비밀번호 일치 여부 확인
    public void checkPassword(Long id, String password) throws NotFoundException {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("존재하지 않는 사용자입니다."));
        if (!bCryptPasswordEncoder.matches(password, user.getPassword())) {
            throw new NotFoundException("비밀번호가 일치하지 않습니다.");
        }
    }


    // 프로필 수정
    @Transactional
    public UpdateUserRes updateUser(Long id, UpdateUserReq updateUserReq, MultipartFile multipartFile) throws Exception, NotFoundException, DuplicateException, NullPointerException {

        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("존재하지 않는 사용자입니다."));

        // 닉네임을 기본으로 DB에 저장되어 있는 값을 저장
        String nickname = user.getNickname();

        // 닉네임을 수정한 경우에만 닉네임 중복 체크를 하고 nickname 변수에 담아준다.
        if (!updateUserReq.getNickname().equals(nickname)) {
            log.debug("기존 닉네임이랑 달라!!! 닉네임 중복체크 하러 들어옴");
            duplicateNickname(updateUserReq.getNickname());
            nickname = updateUserReq.getNickname();

        }

        // profileImg에 기존에 user 프로필 이미지 URL을 넣어준다.
        String profileImg = user.getProfileImg();

        // 만약 사용자가 프사를 수정한 경우
        if (multipartFile!=null) {
            log.debug("프사 수정했네!");
            profileImg = upload(multipartFile); // 프로필 이미지 업로드
        }
        LocalDateTime createDate = LocalDateTime.now();

        user.updateUser(nickname, profileImg, createDate);

        UpdateUserRes updateUserRes = UpdateUserRes.builder().nickname(updateUserReq.getNickname()).profileImg(profileImg).build();

        return updateUserRes;

    }

    // 비밀번호 수정
    @Transactional
    public void updatePassword(Long id, UpdatePasswordReq updatePasswordReq) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("존재하지 않는 사용자입니다."));

        // 비밀번호를 변경한 경우에만 update 수행
        if (updatePasswordReq.getPassword() != null) {
            String password = bCryptPasswordEncoder.encode(updatePasswordReq.getPassword());
            user.updatePassword(password);
        }

    }

    // S3에 파일 업로드
    public String upload(MultipartFile multipartFile) throws Exception {

        String originalName = multipartFile.getOriginalFilename(); // 파일 이름
        long size = multipartFile.getSize(); // 파일 크기

        ObjectMetadata objectMetaData = new ObjectMetadata();
        objectMetaData.setContentType(multipartFile.getContentType());
        objectMetaData.setContentLength(size);

        // S3에 업로드
        amazonS3Client.putObject(
                new PutObjectRequest(bucket + "/profile", originalName, multipartFile.getInputStream(), objectMetaData)
                        .withCannedAcl(CannedAccessControlList.PublicRead)
        );

        String imagePath = amazonS3Client.getUrl(bucket, originalName).toString(); // 접근가능한 URL 가져오기


        return imagePath;
    }

}