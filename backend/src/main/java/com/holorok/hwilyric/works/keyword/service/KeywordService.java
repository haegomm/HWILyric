package com.holorok.hwilyric.works.keyword.service;

import com.holorok.hwilyric.trend.repository.NewlyTrendRepository;
import com.holorok.hwilyric.works.keyword.repository.KeywordRepository;
import com.holorok.hwilyric.exception.NotFoundException;
import kr.co.shineware.nlp.komoran.constant.DEFAULT_MODEL;
import kr.co.shineware.nlp.komoran.core.Komoran;
import kr.co.shineware.nlp.komoran.model.KomoranResult;
import kr.co.shineware.nlp.komoran.model.Token;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.apache.spark.mllib.feature.Word2Vec;
//import org.deeplearning4j.models.word2vec.Word2Vec;
import org.deeplearning4j.models.embeddings.loader.WordVectorSerializer;
//import org.apache.spark.mllib.feature.Word2VecModel;
import org.deeplearning4j.models.word2vec.Word2Vec;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KeywordService {

    private final KeywordRepository keywordRepository;
    private final NewlyTrendRepository newlyTrendRepository;

    private static Random random = new Random();

    // 랜덤 키워드 불러오기
    public List<String> getRandomKeyword() {
        String random = "랜덤";
        List<String> randomList = keywordRepository.findRandomWord(random, true, 7); // 한글 단어 담기
        List<String> englishList = keywordRepository.findRandomWord(random, false, 3); // 영어 단어

        // randomList에 영어 단어 추가하기
        for (String english : englishList) {
            randomList.add(english);
        }
        log.debug("랜덤 키워드 리스트 : {}", randomList);
        return randomList;
    }

//    private static scala.collection.immutable.Map<String, float[]> toScalaImmutableMap(Map<String, float[]> pFromMap) {
//        final List<Tuple2<String, float[]>> list = pFromMap.entrySet().stream()
//                .map(e -> Tuple2.apply(e.getKey(), e.getValue()))
//                .collect(Collectors.toList());
//        Seq<Tuple2<String, float[]>> scalaSeq = JavaConverters.asScalaBufferConverter(list).asScala().toSeq();
//        return (scala.collection.immutable.Map<String, float[]>) scala.collection.immutable.Map$.MODULE$.apply(scalaSeq);
//    }

//    // 유사 키워드 조회
//    public List<String> getSimilarKeyword(String word) throws NotFoundException, IOException, ClassNotFoundException {
//
//        long startTime = System.nanoTime();
//
//        Komoran komoran = new Komoran(DEFAULT_MODEL.FULL);
//
//        // 한글 추출
//        String hangulRegex = "[가-힣]+"; // 가-힣: 모든 한글 글자
//        Pattern hangulPattern = Pattern.compile(hangulRegex); // 정규표현식 컴파일
//        Matcher hangulMatcher = hangulPattern.matcher(word); // 문자열에서 패턴과 일치하는 문자열 찾기
//
//        StringBuilder hangul = new StringBuilder();
//        while (hangulMatcher.find()) {
//            hangul.append(hangulMatcher.group() + " ");
//        }
//        log.debug("한글만 추출한 거 : {}", hangul.toString());
//
////        // 영어 추출
////        String englishRegex = "[a-zA-Z]+"; // a-z, A-Z: 모든 영어 글자
////        Pattern englishPattern = Pattern.compile(englishRegex);
////        Matcher englishMatcher = englishPattern.matcher(word);
////
////        List<String> english = new ArrayList<>();
////        while (englishMatcher.find()) {
////            english.add(englishMatcher.group());
////        }
////        log.debug("영어만 추출한 거 : {}", english.toString());
//
//        Collection<String> hangulList = new ArrayList<>();
//
//        // 사용자가 한글을 입력한 경우
//        if(hangul.length()>0) {
//            KomoranResult komoranResult = komoran.analyze(hangul.toString());
//
//            // 한글 토큰화
//            List<Token> tokenList = komoranResult.getTokenList();
//            log.debug("토큰화 된 리스트 : {}", tokenList.toString());
//            List<String> similarList = new ArrayList<>();
//            for (Token token : tokenList) {
//                // NNP : 고유명사, NNG : 일반명사, NR : 수사
//                if (token.getPos().equals("NNP") || token.getPos().equals("NNG") || token.getPos().equals("NR")) {
//                    log.debug("추출된 명사 단어 : {}", token.getMorph());
//                    similarList.add(token.getMorph());
//                }
//            }
//            // 한글 Word2Vec 모델 저장 경로
//            File hangulModel = new File("src/main/resources/model/jjtest");
//
//            // hangulModel 로드
//            Word2Vec hanModel = WordVectorSerializer.readWord2VecModel(hangulModel);
//
//            // 인풋 데이터와 유사한 단어 20개 리스트
//            hangulList = hanModel.wordsNearest(similarList.get(0), 20);
//        }
//
////        Collection<String> englishList = new ArrayList<>();
////
////        if(!english.isEmpty()){
////            // 영어 Word2Vec 모델 저장 경로
////            File googleModel = new File("src/main/resources/model/GoogleNews-vectors-negative300.bin");
////
////            // googleModel 로드
////            Word2Vec engModel = WordVectorSerializer.readWord2VecModel(googleModel);
////
////            // 인풋 데이터와 유사한 단어 20개 리스트
////            englishList = engModel.wordsNearest(english.get(0), 20);
////        }
//
//        List<String> resultList = new ArrayList<>();
//
//        if(!hangulList.isEmpty()) {
//            for (String hangulWord : hangulList) {
//                resultList.add(hangulWord);
//            }
//        } else{
//            throw new NotFoundException("유사한 키워드가 없습니다.");
//        }
////        if(!englishList.isEmpty()) {
////            for (String englighWord : englishList) {
////                resultList.add(englighWord);
////            }
////        }
//        log.debug("유사 키워드 뽑아봄 : {}", resultList.toString());
//
//        long endTime = System.nanoTime();
//
////        sparkContext.stop();
//
//        log.debug("코드 실행 시간 : {} ms", (endTime - startTime)/1000000);
//
//        return resultList;
//
////        return null;
//    }

    // 주제 추천
    public List<String> getTopicList() throws NotFoundException {

        // 랜덤 키워드 추출
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

        while (count<5){
            String word = keywordArray[random.nextInt(keywordArray.length)];
            if(!topicList.contains(word)){
                topicList.add(word);
                count++;
            }
        }

        return topicList;
    }

}
