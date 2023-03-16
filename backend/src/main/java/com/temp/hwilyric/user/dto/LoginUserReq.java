package com.temp.hwilyric.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LoginUserReq {

    // 이메일
    String email;

    // 비밀번호
    String password;

}
