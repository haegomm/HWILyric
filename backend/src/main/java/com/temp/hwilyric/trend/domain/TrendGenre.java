package com.temp.hwilyric.trend.domain;


import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Slf4j
@ToString
@Table(name="trend_genre")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrendGenre implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trend_id")
    private Trend trend;

    @Column(name = "name")
    private String name;

    @Column(name = "ratio")
    private Double ratio;
}
