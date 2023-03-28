package com.temp.hwilyric.trend.repository;

import com.temp.hwilyric.trend.domain.TrendKeyword;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrendKeywordRepository extends JpaRepository<TrendKeyword, Long> {
    List<TrendKeyword> findByTrend_Annual(int annual);
}