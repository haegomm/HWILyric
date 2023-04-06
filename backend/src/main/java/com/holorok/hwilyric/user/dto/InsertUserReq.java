package com.holorok.hwilyric.user.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class InsertUserReq {

    // 이메일
    @ApiModelProperty(example = "kim1234@ssafy.com")
    @Email
    @Size(max = 100)
    private String email;

    // 비밀번호
    @Size(min = 8, max = 20)
    private String password;

    // 닉네임
    @NotBlank
    @Size(min = 1, max = 8)
    private String nickname;
}