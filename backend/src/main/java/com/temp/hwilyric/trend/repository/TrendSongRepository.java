package com.temp.hwilyric.trend.repository;

import com.temp.hwilyric.trend.domain.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrendSongRepository extends JpaRepository<Music, Long> {
    @Query(value = "SELECT * from music where genre like %:genre% and chart_year=:chartYear order by `rank` asc", nativeQuery = true)
    List<Music> findByChartYearOrderByRankAsc(@Param("chartYear") int chartYear, @Param("genre") String genre);
}