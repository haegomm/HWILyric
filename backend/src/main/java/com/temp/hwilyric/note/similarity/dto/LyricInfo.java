package com.temp.hwilyric.note.similarity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Comparator;

@Getter
@Setter
@NoArgsConstructor
public class LyricInfo {
    private String lyric;
    private String artist;
    private String title;
    private double ratio;
    public LyricInfo(String title, String artist, String lyric, Double ratio) {
        this.lyric = lyric;
        this.artist = artist;
        this.title = title;
        this.ratio = ratio;
    }
}
