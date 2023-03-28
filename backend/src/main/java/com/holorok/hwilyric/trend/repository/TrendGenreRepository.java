package com.holorok.hwilyric.trend.repository;

import java.util.List;


import com.holorok.hwilyric.trend.domain.TrendGenre;
import com.holorok.hwilyric.trend.dto.TotalGenreDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface TrendGenreRepository extends JpaRepository<TrendGenre, Long> {
    List<TrendGenre> findByTrend_Annual(int annual);
    @Query("SELECT NEW com.holorok.hwilyric.trend.dto.TotalGenreDTO(tg.trend.annual, tg.name, SUM(tg.ratio)) FROM TrendGenre tg GROUP BY tg.trend.annual, tg.name ORDER BY tg.trend.annual ASC, SUM(tg.ratio) DESC")
    List<TotalGenreDTO> findAnnualGenreRatio();

}