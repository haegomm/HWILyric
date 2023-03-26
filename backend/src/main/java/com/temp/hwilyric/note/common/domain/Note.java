package com.temp.hwilyric.note.common.domain;

import com.temp.hwilyric.config.TimeConfig;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
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
