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
    @ApiModelProperty(example = "kim1234@ssafy.com") // Swagger에서 예시로 보여줌.
    @Email // 이메일 형식이어야 함.
    @Size(max = 100) // email은 100자 이하
    private String email;

    // 비밀번호
    @Size(min = 8, max = 20) // 8자 이상, 20자 이하
    private String password;

    // 닉네임
    @NotBlank // 공백, null은 허용 X
    @Size(min = 1, max = 8) // 1자 이상, 8자 이하
    private String nickname;
}