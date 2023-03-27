package com.temp.hwilyric.trend.controller;

import com.temp.hwilyric.trend.domain.NewlyTrend;
import com.temp.hwilyric.trend.dto.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.temp.hwilyric.trend.domain.*;
import com.temp.hwilyric.trend.service.TrendService;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;



@Slf4j // log 사용하기 위한 어노테이션
@RestController
@RequestMapping("/api/trend")
@RequiredArgsConstructor
@Api(tags = {"트랜드 API"}) // Swagger에서 보이는 controller 이름
public class TrendController {

    @Autowired
    private TrendService trendService;

    @ApiOperation(value = "주간 신곡 데이터") // Swagger에서 보이는 메서드 이름
    @GetMapping("/weekly")
    public ResponseEntity<WeeklyNewRes> getWeeklyTrend(
            @RequestParam("startDate") @DateTimeFormat(pattern = "yyyyMMdd") Date startDate,
            @RequestParam("endDate") @DateTimeFormat(pattern = "yyyyMMdd") Date endDate) {
        List<NewlyTrend> newlyTrends = trendService.getMusicsByReleaseDateBetween(startDate, endDate);
        List<WeeklyGenreDTO> weeklyGenreDTOList = new ArrayList<>();

        for (NewlyTrend newlyTrend : newlyTrends) {
            WeeklyGenreDTO weeklyGenreDTO = new WeeklyGenreDTO(newlyTrend.getGenre(), newlyTrend.getCount());
            weeklyGenreDTOList.add(weeklyGenreDTO);
        }
        List<String> keywords = new ArrayList<>();
        if (!newlyTrends.isEmpty())
            keywords = Arrays.asList(newlyTrends.get(0).getKeywords().split(","));
        WeeklyNewRes weeklyNewRes = new WeeklyNewRes(weeklyGenreDTOList, keywords);

        return ResponseEntity.ok(weeklyNewRes);
    }

    @ApiOperation(value = "전체 연도 장르 및 키워드") // Swagger에서 보이는 메서드 이름
    @GetMapping("/annual")
    public ResponseEntity<TotalGenreRes> getTotalTrend() {
        List<TotalGenreDTO> trendGenres = trendService.getTotalTrendGenres();
        List<TotalGenreDTO> genres = new ArrayList<>();
        int year_num = 0;
        for (TotalGenreDTO trendGenre : trendGenres) {
            int trendYear = trendGenre.getAnnual();
            if (year_num == trendYear)
                continue;
            TotalGenreDTO genre = new TotalGenreDTO(trendYear, trendGenre.getName(), trendGenre.getRatio());
            genres.add(genre);
            year_num = trendYear;
        }
        TotalGenreRes totalGenreRes = new TotalGenreRes(genres);
        return ResponseEntity.ok(totalGenreRes);
    }

    @ApiOperation(value = "연도별 장르 및 키워드") // Swagger에서 보이는 메서드 이름
    @GetMapping("/annual/{year}")
    public ResponseEntity<AnnualGenreKeywordRes> getAnnualTrend(
            @PathVariable("year") String year) {

        int year_num = Integer.parseInt(year);

        List<TrendGenre> trendGenres = trendService.getTrendGenresByYear(year_num);
        List<TrendKeyword> trendKeywords = trendService.getTrendKeywordsByYear(year_num);
        List<GenreSongDTO> genres = new ArrayList<>();
        List<KeywordDTO> keywords = new ArrayList<>();
        for (TrendGenre trendGenre : trendGenres) {
            List<Music> rankedMusics = trendService.getTrendSongByChartYear(year_num, trendGenre.getName());
            List<String> songs = new ArrayList<>();
            if (!rankedMusics.isEmpty()) {
                songs.add(rankedMusics.get(0).getTitle());
                if (rankedMusics.size() > 1) {
                    songs.add(rankedMusics.get(1).getTitle());
                }
            }
            GenreSongDTO genre = new GenreSongDTO(trendGenre.getName(), trendGenre.getRatio(), songs);
            genres.add(genre);
        }
        for (TrendKeyword trendKeyword : trendKeywords) {
            KeywordDTO keyword = new KeywordDTO(trendKeyword.getWord(), trendKeyword.getCount());
            keywords.add(keyword);
        }
        AnnualGenreKeywordRes annualGenreKeywordRes = new AnnualGenreKeywordRes(genres, keywords);
        return ResponseEntity.ok(annualGenreKeywordRes);
    }
}