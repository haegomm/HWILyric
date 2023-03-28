package com.temp.hwilyric.trend.service;

import java.util.List;
import java.util.Date;


import com.temp.hwilyric.trend.domain.Music;
import com.temp.hwilyric.trend.domain.NewlyTrend;
import com.temp.hwilyric.trend.domain.TrendGenre;
import com.temp.hwilyric.trend.domain.TrendKeyword;
import com.temp.hwilyric.trend.dto.TotalGenreDTO;
import com.temp.hwilyric.trend.repository.TrendSongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.temp.hwilyric.trend.repository.NewlyTrendRepository;
import com.temp.hwilyric.trend.repository.TrendGenreRepository;
import com.temp.hwilyric.trend.repository.TrendKeywordRepository;

@Service
public class TrendService {

    @Autowired
    private NewlyTrendRepository newlyTrendRepository;

    @Autowired
    private TrendGenreRepository trendGenreRepository;

    @Autowired
    private TrendKeywordRepository trendKeywordRepository;

    @Autowired
    private TrendSongRepository trendSongRepository;

    public List<NewlyTrend> getMusicsByReleaseDateBetween(Date startDate, Date endDate) {
        return newlyTrendRepository.findByReleasedDateBetween(startDate, endDate);
    }
    public List<TrendGenre> getTrendGenresByYear(int annual) {
        return trendGenreRepository.findByTrend_Annual(annual);
    }
    public List<TrendKeyword> getTrendKeywordsByYear (int annual) {
        return trendKeywordRepository.findByTrend_Annual(annual);
    }
    public List<Music> getTrendSongByChartYear (int chartYear, String genre) {
        return trendSongRepository.findByChartYearOrderByRankAsc(chartYear, genre);
    }
    public List<TotalGenreDTO> getTotalTrendGenres() {
        return trendGenreRepository.findAnnualGenreRatio();
    }
}

