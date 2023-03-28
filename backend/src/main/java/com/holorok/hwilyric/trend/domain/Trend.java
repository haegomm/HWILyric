package com.holorok.hwilyric.trend.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Slf4j
@ToString
@Table(name="trend")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Trend implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "annual")
    private int annual;

    @OneToMany(mappedBy = "trend")
    private List<TrendGenre> trendGenres;

    @OneToMany(mappedBy = "trend")
    private List<TrendKeyword> trendKeywords;
}
