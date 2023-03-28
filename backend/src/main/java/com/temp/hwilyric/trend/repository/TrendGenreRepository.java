package com.temp.hwilyric.trend.repository;

import java.time.LocalDate;
import com.temp.hwilyric.trend.domain.Music;
import java.util.List;
import java.util.Date;


import com.temp.hwilyric.trend.domain.TrendGenre;
import com.temp.hwilyric.trend.dto.TotalGenreDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface TrendGenreRepository extends JpaRepository<TrendGenre, Long> {
    List<TrendGenre> findByTrend_Annual(int annual);
    @Query("SELECT NEW com.temp.hwilyric.trend.dto.TotalGenreDTO(tg.trend.annual, tg.name, SUM(tg.ratio)) FROM TrendGenre tg GROUP BY tg.trend.annual, tg.name ORDER BY tg.trend.annual ASC, SUM(tg.ratio) DESC")
    List<TotalGenreDTO> findAnnualGenreRatio();

}