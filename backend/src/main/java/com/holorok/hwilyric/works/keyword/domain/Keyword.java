package com.holorok.hwilyric.works.keyword.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;

@Slf4j
@ToString
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Keyword {

    // pk
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-increment 지원
    private Long id;

    // 단어
    @Column(nullable = false, length = 100)
    private String word;

    // 단어의 카테고리
    @Column(nullable = false, length = 20)
    private String category;

    // 한글 여부(1 : 한글, 0 : 기타)
    @Column(nullable = false, name = "is_hangul")
    private Boolean isHangul;

}
