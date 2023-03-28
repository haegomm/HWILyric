package com.holorok.hwilyric.note.common.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
public class Lyric {
    private String type;
    private String lyrics;
}
