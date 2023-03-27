package com.temp.hwilyric.note.rhyme.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class RhymeRes {
    private List<String> rhymeList;

    public RhymeRes(List<String> rhymeList) { this.rhymeList = rhymeList; }
}
