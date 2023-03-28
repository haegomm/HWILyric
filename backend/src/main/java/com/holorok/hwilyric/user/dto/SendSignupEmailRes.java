package com.holorok.hwilyric.user.dto;

import lombok.*;

@Getter
@NoArgsConstructor
public class SendSignupEmailRes {

    // 인증코드
    private String code;

    @Builder
    public SendSignupEmailRes(String code) {
        this.code = code;
    }

}