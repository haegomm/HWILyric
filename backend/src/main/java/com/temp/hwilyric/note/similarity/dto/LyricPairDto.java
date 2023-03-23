package com.temp.hwilyric.note.similarity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LyricPairDto { //ResponseDto에 들어갈 dto. 사용자 가사 한 줄당 유사한 가사 세 줄이 같이 들어간다.
    private String userLyric;
    private String[] lyricList;
    private String[] artistList;
    private String[] titleList;

    public LyricPairDto(String userLyric, String[] lyricList, String[] artistList, String[] titleList) {
        this.userLyric = userLyric;
        this.lyricList = lyricList;
        this.artistList = artistList;
        this.titleList = titleList;
    }
}
