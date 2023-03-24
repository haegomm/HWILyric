package com.temp.hwilyric.note.common.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notes")
@Getter
@Setter
public class Lyric {
    private String type;
    private String lyrics;
}
