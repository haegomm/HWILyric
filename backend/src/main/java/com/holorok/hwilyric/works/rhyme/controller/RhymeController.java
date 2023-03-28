package com.holorok.hwilyric.works.rhyme.controller;

import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.works.rhyme.service.RhymeService;
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

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/keywords")
@RequiredArgsConstructor
@Api(tags = {"라임 API"}) // Swagger에서 보이는 controller 이름
public class RhymeController {
    private final RhymeService rhymeService;
    @ApiOperation(value = "라임 키워드 조회")
    @GetMapping(value = "/rhyme/{word}", produces = "application/json;charset=utf-8")
    public ResponseEntity<List<String>> getRhymeKeyword(@PathVariable("word") String word) throws NotFoundException {

        List<String> rhymeList = rhymeService.getRhymeKeyword(word);

        return new ResponseEntity<>(rhymeList, HttpStatus.OK);
    }
}