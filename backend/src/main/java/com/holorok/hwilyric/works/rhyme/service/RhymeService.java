package com.holorok.hwilyric.works.rhyme.service;


import com.holorok.hwilyric.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RhymeService {

//    private final SparkSqlManager ssm;
//    public RhymeRes recommendRhyme(RhymeReq reqDto) throws JSchException {
//
//        RhymeRes result = new RhymeRes(new ArrayList<String>());
//
//        String word = reqDto.getWord();
//        Dataset<Row> dataset = ssm.selectTable("music_rhyme");
//
//        Object[] checkJaccard = new Object[(int)dataset.count()];

//        dataset.select('segment').getRows((int)dataset.count()).copyToArray(checkJaccard, 1);
//
//        public class Main {
//            private static final int BASE_CODE = 44032;
//            private static final int CHOSUNG = 588;
//            private static final int JUNGSUNG = 28;
//            private static final String[] CHOSUNG_LIST = {"ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"};
//            private static final String[] JUNGSUNG_LIST = {"ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"};
//            private static final String[] JONGSUNG_LIST = {"", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"};
//
//            private static String[] decomposition(String word) {
//                String[] sp_list = word.split("");
//                Set<String> jaccard_set = new HashSet<>();
//
//                StringBuilder sb = new StringBuilder();
//                for (String keyword : sp_list) {
//                    if (keyword.matches(".*[ㄱ-ㅎㅏ-ㅣ가-힣]+.*")) {
//                        int char_code = keyword.charAt(0) - BASE_CODE;
//                        int char1 = char_code / CHOSUNG;
//                        sb.append(CHOSUNG_LIST[char1]);
//
//                        int char2 = (char_code - (CHOSUNG * char1)) / JUNGSUNG;
//                        sb.append(JUNGSUNG_LIST[char2]);
//
//                        int char3 = char_code - (CHOSUNG * char1) - (JUNGSUNG * char2);
//                        sb.append(JONGSUNG_LIST[char3]);
//                    } else {
//                        sb.append(keyword);
//                    }
//                }
//
//                for (int j = 1; j < sb.length(); j++) {
//                    jaccard_set.add(sb.substring(j - 1, j + 1));
//                }
//
//                return new String[]{sb.toString(), String.join(",", jaccard_set)};
//            }
//
//            public static void main(String[] args) {
//                String word = reqDto.getWord();
//                String[] string_decomposition = decomposition(word);
//                Object[] checkJaccard = new Object[(int)dataset.count()];
//                dataset.select('segment').getRows((int)dataset.count()).copyToArray(checkJaccard);
//
//                List<String[]> compare_list = Arrays.asList(checkJaccard.stream()
//                        .filter(i -> !i.equals(word))
//                        .map(Main::decomposition)
//                        .toArray(String[][]::new));
//
//                double jaccard
//
//
//            }
//
//
//
//        return result;
//    }

//    private final SparkSqlManager ssm;
    public List<String> getRhymeKeyword(String word) throws NotFoundException {


//        Dataset<Row> dataset = ssm.selectTable("music_rhyme");
//
//        Object[] checkJaccard = new Object[(int)dataset.count()];
//        dataset.select('segment').getRows((int)dataset.count()).copyToArray(checkJaccard);

        String pythonFilePath = "C:/Users/SSAFY/Desktop/jaccard.py";
        String pythonExecutablePath = "C:/Users/SSAFY/AppData/Local/Programs/Python/Python39/python.exe";
        String[] checkJaccard = {"생각이", "많은", "건", "말이야", "당연히", "해야", "할", "일이야"};

        ProcessBuilder processBuilder = new ProcessBuilder(pythonExecutablePath, pythonFilePath);
        processBuilder.command().add(word);
//        processBuilder.command().add(checkJaccard);

        List<String> rhymeList = new ArrayList<>();
        try {
            Process process = processBuilder.start();

            // error stream 읽어오는 부분
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String errorLine;
            while ((errorLine = errorReader.readLine()) != null) {
                log.debug("에러 문구 : {}",errorLine);
            }

            // 파이썬 스크립트의 출력을 읽어옵니다.
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream(), "euc-kr"));
            String line;

            while ((line = reader.readLine()) != null) {
                rhymeList.add(line);
            }
            log.debug("결과볼까 : {}",rhymeList);
    } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
            return rhymeList;
    }
}