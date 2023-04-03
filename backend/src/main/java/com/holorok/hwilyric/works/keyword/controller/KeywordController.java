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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/keywords")
@RequiredArgsConstructor
@Api(tags = {"키워드 API"}) // Swagger에서 보이는 controller 이름
public class KeywordController {

    private final KeywordService keywordService;

    @ApiOperation(value = "랜덤 키워드") // Swagger에서 보이는 메서드 이름
    @GetMapping(value = "/random")
    public ResponseEntity<List<String>> getRandomKeyword() {
        List<String> randomList = keywordService.getRandomKeyword();

        return new ResponseEntity<>(randomList, HttpStatus.OK);
    }

    @ApiOperation(value = "유사 키워드 조회")
    @GetMapping(value = "/similarity/{word}", produces = "application/json;charset=utf-8")
    public ResponseEntity<List<String>> getSimilarKeyword(@PathVariable("word") String word) throws NotFoundException, IOException, ClassNotFoundException {

        List<String> similarList = keywordService.getSimilarKeyword(word);

        return new ResponseEntity<>(similarList, HttpStatus.OK);
    }

}
