package com.holorok.hwilyric.works.note.dto;

import lombok.*;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class AutoSaveRes {
    private String id;
    private ZonedDateTime updatedDate;

    @Builder
    public AutoSaveRes(String id, ZonedDateTime updatedDate) {
        this.id = id;
        this.updatedDate = updatedDate;
    }
}