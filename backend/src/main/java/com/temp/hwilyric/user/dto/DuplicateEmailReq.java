package com.temp.hwilyric.user.dto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class DuplicateEmailReq {

    // 이메일
    private String email;
}
