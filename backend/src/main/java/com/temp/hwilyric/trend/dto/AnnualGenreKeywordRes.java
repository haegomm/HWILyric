package com.temp.hwilyric.trend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnnualGenreKeywordRes {
    private List<GenreSongDTO> genres;
    private List<KeywordDTO> keywords;
}
