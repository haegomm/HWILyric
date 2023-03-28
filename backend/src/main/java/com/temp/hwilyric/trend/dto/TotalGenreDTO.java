package com.temp.hwilyric.trend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TotalGenreDTO {
    private int annual;
    private String name;
    private Double ratio;
}
