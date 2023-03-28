package com.holorok.hwilyric.works.similarity.controller;

import com.jcraft.jsch.JSchException;
import com.holorok.hwilyric.works.similarity.dto.SimilarityReq;
import com.holorok.hwilyric.works.similarity.dto.SimilarityRes;
import com.holorok.hwilyric.works.similarity.service.SimilarityService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Api(tags = {"유사도 검사"})
public class SimilarityController {
    @Autowired
    private SimilarityService service;

    @PostMapping("/similarity")
    public ResponseEntity<SimilarityRes> similarityCheck(@RequestBody SimilarityReq reqDto) throws JSchException {
        SimilarityRes result = service.checkSimilarity(reqDto);
        if(result!=null)
            return new ResponseEntity<SimilarityRes>(result, HttpStatus.OK);

        return new ResponseEntity<SimilarityRes>(result, HttpStatus.NO_CONTENT);
    }
}
