package com.temp.hwilyric.note.common.domain;

import com.querydsl.core.annotations.QueryEntity;
import com.temp.hwilyric.config.TimeConfig;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document(collection = "notes")
@Getter
@Setter
public class Note extends TimeConfig {
    @Id
    private Long id;
    private Long userId;
    private String title;
    private String thumnail;
    private String memo;
    private List<Lyric> lyricList;

    @Builder
    public Note(Long id, Long userId, String title, String thumnail, String memo, List<Lyric> lyricList) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.thumnail = thumnail;
        this.memo = memo;
        this.lyricList = lyricList;
    }
}
