package com.holorok.hwilyric.trend.repository;

import java.util.List;
import java.util.Date;


import com.holorok.hwilyric.trend.domain.NewlyTrend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface NewlyTrendRepository extends JpaRepository<NewlyTrend, Long> {
    List<NewlyTrend> findByReleasedDateBetween(Date startDate, Date endDate);

    @Query(value = "select n.keywords from newly_trend n where n.released_date between :startDate and :endDate order by rand() limit :num", nativeQuery = true)
    String findByKeywordsDateBetween(@Param("startDate") String startDate, @Param("endDate") String endDate, @Param("num") int num);
}