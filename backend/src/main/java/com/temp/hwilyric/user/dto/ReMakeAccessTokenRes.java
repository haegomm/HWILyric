package com.temp.hwilyric.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class ReMakeAccessTokenRes {

    // access token
    private String accessToken;

    @Builder
    public ReMakeAccessTokenRes(String accessToken){
        this.accessToken = accessToken;
    }



}
