package com.temp.hwilyric.trend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GenreSongDTO {
    private String name;
    private Double ratio;
    private List<String> songs;
}
