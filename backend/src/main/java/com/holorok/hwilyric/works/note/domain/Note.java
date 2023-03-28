package com.holorok.hwilyric.works.note.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
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
    private String thumnail;
    private String memo;
    private List<Lyric> lyricList;

    @Builder
    public Note(String id, Long userId, String title, String thumnail, String memo, List<Lyric> lyricList) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.thumnail = thumnail;
        this.memo = memo;
        this.lyricList = lyricList;
    }
}
