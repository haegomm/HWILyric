package com.holorok.hwilyric.note.similarity.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class SimilarityRes {
    private List<LyricPairDto> similarList;

    public SimilarityRes(List<LyricPairDto> similarList) {
        this.similarList = similarList;
    }
}
