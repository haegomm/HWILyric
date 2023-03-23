package com.temp.hwilyric.note.keyword.repository;

import com.temp.hwilyric.note.keyword.dto.RandomKeywordRes;

import java.util.List;

public interface CustomKeywordRepository {

    List<RandomKeywordRes> findRandomWord();

}
