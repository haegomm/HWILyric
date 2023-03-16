package com.temp.hwilyric.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SendSignupEmailReq {

    // 수신 이메일
    String email;
}