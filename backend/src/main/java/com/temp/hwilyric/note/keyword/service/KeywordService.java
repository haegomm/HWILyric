package com.temp.hwilyric.note.keyword.service;

import com.temp.hwilyric.note.keyword.dto.RandomKeywordRes;
import com.temp.hwilyric.note.keyword.repository.KeywordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KeywordService {

    private final KeywordRepository keywordRepository;

    // 랜덤 키워드 불러오기
    public List<RandomKeywordRes> getRandomKeyword(){
        List<RandomKeywordRes> randomList = keywordRepository.findRandomWord();
        log.debug("랜덤 키워드 리스트 : {}", randomList);
        return randomList;
    }

}
