package com.temp.hwilyric.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MailDto {
    
    // 수신 이메일
    private String address;
    
    // 메일 제목
    private String title;
    
    // 메일 내용
    private String message;
    
    // 인증코드
    private String code;
}