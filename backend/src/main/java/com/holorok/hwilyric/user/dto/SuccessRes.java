package com.holorok.hwilyric.user.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SuccessRes {
    @ApiModelProperty(example = "성공메시지")
    private String message;

    public static SuccessRes make(String message) {
        return SuccessRes.builder()
                .message(message)
                .build();
    }
}