package com.holorok.hwilyric.works.note.dto;

import com.holorok.hwilyric.works.note.domain.Lyric;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NoteReq {
    private String id;
    private String title;
    private String thumbnail;
    private String memo;
    private List<Lyric> lyricList;

    public NoteReq(String id, String title, String thumbnail, String memo, List<Lyric> lyricList) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.memo = memo;
        this.lyricList = lyricList;
    }
}