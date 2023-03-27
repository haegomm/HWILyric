package com.temp.hwilyric.note.keyword.repository;

import java.util.List;

public interface CustomKeywordRepository {

    List<String> findRandomWord(String category, boolean isHangul, int num);

}
