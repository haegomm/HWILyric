package com.holorok.hwilyric.works.similarity.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class LyricPairDto { //ResponseDto에 들어갈 dto. 사용자 가사 한 줄당 유사한 가사 세 줄이 같이 들어간다.
    private String userLyric;
    private List<String> lyricList;
    private List<String> artistList;
    private List<String> titleList;

    public LyricPairDto(String userLyric, List<String> lyricList, List<String> artistList, List<String> titleList) {
        this.userLyric = userLyric;
        this.lyricList = lyricList;
        this.artistList = artistList;
        this.titleList = titleList;
    }

}
