package com.holorok.hwilyric.works.note.dto;

import com.holorok.hwilyric.works.note.domain.Lyric;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NoteRes {
    private String id;
    private String title;
    private String thumbnail;
    private String memo;
    private List<Lyric> lyricList;
    private Date createdDate;
    private Date updatedDate;

    @Builder
    public NoteRes(String id, String title, String thumbnail, String memo, List<Lyric> lyricList, Date createdDate, Date updatedDate) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.memo = memo;
        this.lyricList = lyricList;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}