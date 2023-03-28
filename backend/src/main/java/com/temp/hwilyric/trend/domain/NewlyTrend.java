package com.temp.hwilyric.trend.domain;


import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;

import java.util.Date;

@Entity
@Slf4j
@ToString
@Table(name="newly_trend")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class NewlyTrend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "genre")
    private String genre;

    @Column(name = "count")
    private Integer count;

    @Column(name = "keywords")
    private String keywords;

    @Column(name = "released_date")
    private Date releasedDate;

}
