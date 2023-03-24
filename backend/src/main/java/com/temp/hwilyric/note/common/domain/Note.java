package com.temp.hwilyric.note.common.domain;

import com.querydsl.core.annotations.QueryEntity;
import com.temp.hwilyric.config.TimeConfig;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Document(collection = "notes")
@Getter
@Setter
public class Note extends TimeConfig {
    @Id
    private String id;
    private Long userId;
    private String title;
    private String thumnail;
    private String memo;
    private boolean isActive;
    private List<Lyric> lyricList;
}
