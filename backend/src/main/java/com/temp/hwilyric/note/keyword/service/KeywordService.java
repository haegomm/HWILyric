package com.temp.hwilyric.note.keyword.service;

import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.note.keyword.repository.KeywordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KeywordService {

    private final KeywordRepository keywordRepository;

    // 랜덤 키워드 불러오기
    public List<String> getRandomKeyword() {
        List<String> randomList = keywordRepository.findRandomWord();
        log.debug("랜덤 키워드 리스트 : {}", randomList);
        return randomList;
    }

    // 유사 키워드 조회
    public List<String> getSimilarKeyword(String word) throws NotFoundException {
        // 파이썬 파일 경로 설정
        String pythonFilePath = "C:/Users/SSAFY/PycharmProjects/pythonProject/spark_test.py";

        // 파이썬 실행기 경로 설정 (예: Windows의 경우 "C:\\Python39\\python.exe", Linux의 경우 "/usr/bin/python3")
        String pythonExecutablePath = "C:/Users/SSAFY/AppData/Local/Programs/Python/Python310/python.exe";

        ProcessBuilder processBuilder = new ProcessBuilder(pythonExecutablePath, pythonFilePath);
        processBuilder.command().add(word); // 파이썬으로 매개변수 전달
        List<String> similarList = new ArrayList<>(); // 결과값 저장할 리스트
        try {
            Process process = processBuilder.start();

            // error stream 읽어오는 부분
            BufferedReader error_reader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String error_line;
            while ((error_line = error_reader.readLine()) != null) {
                log.debug("에러 문구 : {}",error_line);
            }

            // 파이썬 스크립트의 출력을 읽어옵니다.
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream(), "euc-kr"));
            String line;

            while ((line = reader.readLine()) != null) {
                similarList.add(line);
            }

            log.debug(String.valueOf(similarList));

            // 파이썬 스크립트 실행이 완료되면 종료 코드를 확인합니다.
            int exitCode = process.waitFor();
            log.debug("Python script exited wite code : {}", Integer.toString(exitCode));

        } catch (InterruptedException | IOException e) {
            log.error(e.getMessage());
            // 스레드에 exception이 발생하면 해당 메서드가 interrupt 됐음을 알려줌.
            Thread.currentThread().interrupt();
        }
        return similarList;
    }

}
