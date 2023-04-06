package com.holorok.hwilyric.works.keyword.service;

import com.holorok.hwilyric.trend.repository.NewlyTrendRepository;
import com.holorok.hwilyric.works.keyword.repository.KeywordRepository;
import com.holorok.hwilyric.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 키워드 추천 관련 로직을 처리하는 서비스입니다
 */
@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KeywordService {

    private final KeywordRepository keywordRepository;
    private final NewlyTrendRepository newlyTrendRepository;

    private static Random random = new Random();

    /**
     * 랜덤 키워드를 DB에서 뽑아 List에 담아줍니다
     * @return 랜덤 키워드가 담긴 List
     */
    public List<String> getRandomKeyword() {
        String random = "랜덤";
        List<String> randomList = keywordRepository.findRandomWord(random, true, 7); // 한글 단어 담기
        List<String> englishList = keywordRepository.findRandomWord(random, false, 3); // 영어 단어

        for (String english : englishList) {
            randomList.add(english);
        }
        log.debug("랜덤 키워드 리스트 : {}", randomList);
        return randomList;
    }

    /**
     *
     * @return 랜덤 데이터 셋과 신곡 데이터 키워드 셋에서 랜덤으로 추출하여 List를 반환합니다
     * @throws NotFoundException
     */
    public List<String> getTopicList() throws NotFoundException {


        List<String> topicList = keywordRepository.findRandomWord("랜덤", true, 5);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");

        Calendar calendar = Calendar.getInstance();
        Date endDate = calendar.getTime();
        calendar.add(Calendar.DATE, -7);
        Date startDate = calendar.getTime();

        String realEndDate = simpleDateFormat.format(endDate);

        String realStartDate = simpleDateFormat.format(startDate);

        String keywordList = newlyTrendRepository.findByKeywordsDateBetween(realStartDate, realEndDate, 1);
        String[] keywordArray = keywordList.split(",");

        int count = 0;

        while (count < 5) {
            String word = keywordArray[random.nextInt(keywordArray.length)];
            if (!topicList.contains(word)) {
                topicList.add(word);
                count++;
            }
        }

        return topicList;
    }

}
