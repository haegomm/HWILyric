package com.holorok.hwilyric.oauth.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class KakaoLoginRes {

    // 닉네임
    private String nickname;

    // 프로필 이미지 URL
    private String profileImg;

    // 사용자 타입
    private String userType;

    // accessToken
    private String accessToken;

    @Builder
    public KakaoLoginRes(String nickname, String profileImg, String userType, String accessToken){
        this.nickname = nickname;
        this.profileImg = profileImg;
        this.userType = userType;
        this.accessToken = accessToken;
    }

}
