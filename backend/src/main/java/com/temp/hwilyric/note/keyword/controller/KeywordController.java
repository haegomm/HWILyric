package com.temp.hwilyric.note.keyword.controller;

import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.note.keyword.dto.RandomKeywordRes;
import com.temp.hwilyric.note.keyword.service.KeywordService;
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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/keywords")
@RequiredArgsConstructor
@Api(tags = {"키워드 API"}) // Swagger에서 보이는 controller 이름
public class KeywordController {

    private final KeywordService keywordService;

    @ApiOperation(value = "이메일 중복체크") // Swagger에서 보이는 메서드 이름
    @GetMapping(value = "/random")
    public ResponseEntity<List<RandomKeywordRes>> getRandomKeyword() {
        List<RandomKeywordRes> randomList = keywordService.getRandomKeyword();

        return new ResponseEntity<List<RandomKeywordRes>>(randomList, HttpStatus.OK);
    }

    @ApiOperation(value = "유사 키워드 조회")
    @GetMapping(value="/similarity/{keyword}")
    public ResponseEntity<List<String>> getSimilarKeyword(@PathVariable("keyword") String keyword) throws IOException, InterruptedException, NotFoundException {

        List<String> similar_list = keywordService.getSimilarKeyword(keyword);

        return new ResponseEntity<List<String>>(similar_list, HttpStatus.OK);
    }

}
