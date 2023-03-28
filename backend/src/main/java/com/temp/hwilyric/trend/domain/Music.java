package com.temp.hwilyric.trend.domain;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import java.util.Date;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Slf4j
@ToString
@Table(name="music")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Music {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "artist")
    private String artist;

    @Column(name = "lyrics")
    private String lyrics;

    @Column(name = "is_foreign")
    private byte isForeign;

    @Column(name = "album")
    private String album;

    @Column(name = "genre")
    private String genre;

    @Column(name = "rank")
    private int rank;

    @Column(name = "chart_year")
    private int chartYear;

    @Column(name = "is_active")
    private byte isActive;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "released_date")
    private LocalDate releasedDate;

    // 기타 필요한 필드

    // 생성자, getter, setter 등
}
