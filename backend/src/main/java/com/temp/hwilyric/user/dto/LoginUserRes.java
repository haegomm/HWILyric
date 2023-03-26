package com.temp.hwilyric.user.dto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
public class LoginUserRes {

    // 닉네임
    private String nickname;

    // 프로필 이미지 URL
    private String profileImg;

    // 사용자 타입
    private String userType;

    // accessToken
    private String accessToken;

    @Builder
    public LoginUserRes(String nickname, String profileImg, String userType, String accessToken) {
        this.nickname = nickname;
        this.profileImg = profileImg;
        this.userType = userType;
        this.accessToken = accessToken;
    }

}
