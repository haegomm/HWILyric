package com.temp.hwilyric.note.common.domain;

import com.querydsl.core.annotations.QueryEntity;
import com.temp.hwilyric.config.TimeConfig;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "notes")
@Getter
@Setter
public class Note extends TimeConfig {
    @Id
    private Long id;
    private String title;
    private Long userId;




}
