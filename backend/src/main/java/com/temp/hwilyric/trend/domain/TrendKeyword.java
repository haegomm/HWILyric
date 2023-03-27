package com.temp.hwilyric.trend.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;


@Entity
@Slf4j
@ToString
@Table(name="trend_keyword")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrendKeyword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trend_id")
    private Trend trend;

    @Column(name = "word")
    private String word;

    @Column(name = "count")
    private int count;
}