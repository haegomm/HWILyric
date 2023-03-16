package com.temp.hwilyric.user.domain;

import com.temp.hwilyric.user.dto.InsertUserReq;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Slf4j
@ToString
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User implements Serializable {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-increment 지원
    private Long id;

    // 이메일
    @Column(unique = true, nullable = false, length = 100)
    private String email;

    // 비밀번호
    @Column(length = 100)
    private String password;

    // 닉네임
    @Column(unique = true, nullable = false, length = 20)
    private String nickname;

    // 프로필 이미지 URL
    @Column(nullable = false, length = 200, name = "profile_img")
    private String profileImg;

    // 사용자 타입(NORMAL:일반,  KAKAO:카카오톡)
    @Column(nullable = false, name = "user_type", length = 15)
    private String userType;

    // refresh토큰
    @Column(unique = true, length = 200, name = "refresh_token")
    private String refreshToken;

    // 가입일시
    @Column(nullable = false, name = "created_date")
    private LocalDateTime createdDate;

    // 수정일시
    @Column(name = "updated_date")
    private LocalDateTime updatedDate;

    // spring security용 컬럼
    @Column(nullable = false, length = 15)
    private String role;

    // 회원상태(true : 활성화, false : 탈퇴)
    @Column(nullable = false, name = "is_active")
    private Boolean isActive;

    // 일반 사용자 회원가입
    @Builder
    public User(InsertUserReq insertUserReq, LocalDateTime createDate, String password) {
        this.email = insertUserReq.getEmail();
        this.password = password;
        this.nickname = insertUserReq.getNickname();
        this.profileImg = insertUserReq.getProfileImg();
        this.userType = "NORMAL";
        this.createdDate = createDate;
        this.role = "ROLE_USER";
        this.isActive = true;
    }

//    // 카카오 사용자 회원가입
//    public User(String email, String nickname, LocalDateTime createdDate) {
//        this.email = email;
//        this.nickname = nickname;
//        this.profileImg = "default url";
//        this.createdDate = createdDate;
//        this.role = "ROLE_USER";
//        this.isActive = true;
//    }
//
//    // 카카오 사용자 이메일 수정
//    public void updateEmail(String email) {
//        this.email = email;
//    }
//
//    public void saveRefreshToken(String refreshToken) {
//        this.refreshToken = refreshToken;
//    }
//
//    public void deleteRefreshToken() {
//        this.refreshToken = null;
//    }
//
//    // 회원 정보 조회
//    public GetUserRes toDTO() {
//        return new GetUserRes(id, email, nickname, profileImg);
//    }
//
//    // 프로필 수정
//    public void updateUser(UpdateUserReq updateUserReq, String password) {
//        this.nickname = updateUserReq.getNickname();
//        this.password = password;
//        this.profileImg = updateUserReq.getPicture();
//    }
//
    // 비밀번호 변경
    public void updatePassword(String password){
        this.password = password;
    }

}
