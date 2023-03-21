package com.temp.hwilyric.oauth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class KakaoLoginReq {

    // 인가코드
    private String code;
}
