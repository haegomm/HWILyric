package com.holorok.hwilyric.works.note.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;

@Document(collection = "notes")
@Getter
@Setter
@NoArgsConstructor
public class Note {
    @Id
    private String id;
    private Long userId;
    private String title;
    private String thumbnail;
    private String memo;
    private List<Lyric> lyricList;
    private Date createdDate;
    private Date updatedDate;


    @Builder
    public Note(String id, Long userId, String title, String thumbnail, String memo, List<Lyric> lyricList,Date createdDate,Date updatedDate) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.thumbnail = thumbnail;
        this.memo = memo;
        this.lyricList = lyricList;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}
