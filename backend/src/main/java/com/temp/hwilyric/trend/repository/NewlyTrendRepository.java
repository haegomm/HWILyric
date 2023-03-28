package com.temp.hwilyric.trend.repository;

import java.util.List;
import java.util.Date;


import com.temp.hwilyric.trend.domain.NewlyTrend;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NewlyTrendRepository extends JpaRepository<NewlyTrend, Long> {
    List<NewlyTrend> findByReleasedDateBetween(Date startDate, Date endDate);
}