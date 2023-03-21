package com.temp.hwilyric.user.dto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
public class UpdateUserRes {

    // 닉네임
    private String nickname;

    // 프로필 이미지 URL
    private String profileImg;

    @Builder
    public UpdateUserRes(String nickname, String profileImg) {
        this.nickname = nickname;
        this.profileImg = profileImg;
    }
}
