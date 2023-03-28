package com.holorok.hwilyric.trend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WeeklyNewRes {
    private List<WeeklyGenreDTO> genres;
    private List<String> keywords;
}

