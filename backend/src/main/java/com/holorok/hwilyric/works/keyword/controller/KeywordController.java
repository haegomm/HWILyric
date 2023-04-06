package com.holorok.hwilyric.works.keyword.controller;

import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.works.keyword.service.KeywordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 키워드와 관련된 API를 처리하는 컨트롤러입니다
 */
@Slf4j
@RestController
@RequestMapping("/api/keywords")
@RequiredArgsConstructor
@Api(tags = {"키워드 API"})
public class KeywordController {

    private final KeywordService keywordService;

    /**
     * 랜덤 키워드를 반환합니다.
     * @return DB에 저장되어 있는 키워드 중 랜덤으로 10개를 담은 List로 반환합니다
     */
    @ApiOperation(value = "랜덤 키워드")
    @GetMapping(value = "/random")
    public ResponseEntity<List<String>> getRandomKeyword() {
        List<String> randomList = keywordService.getRandomKeyword();

        return new ResponseEntity<>(randomList, HttpStatus.OK);
    }

    /**
     * 주제 추천
     * 
     * @return 랜덤 키워드 데이터셋과 주간 키워드 데이터셋에서 랜덤으로 뽑은 값을 담은 List를 반환합니다
     * @throws NotFoundException
     */
    @ApiOperation(value = "주제 추천")
    @GetMapping(value = "/topics")
    public ResponseEntity<List<String>> getTopicList() throws NotFoundException {

        List<String> topicList = keywordService.getTopicList();

        return new ResponseEntity<>(topicList, HttpStatus.OK);
    }

}
