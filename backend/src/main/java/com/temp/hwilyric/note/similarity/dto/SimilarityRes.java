package com.temp.hwilyric.note.similarity.dto;

import lombok.AllArgsConstructor;
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
