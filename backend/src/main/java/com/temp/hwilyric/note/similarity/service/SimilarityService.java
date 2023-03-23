package com.temp.hwilyric.note.similarity.service;

import com.jcraft.jsch.JSchException;
import com.temp.hwilyric.note.similarity.dto.LyricInfo;
import com.temp.hwilyric.note.similarity.dto.LyricPairDto;
import com.temp.hwilyric.note.similarity.dto.SimilarityReq;
import com.temp.hwilyric.note.similarity.dto.SimilarityRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.similarity.JaroWinklerSimilarity;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import scala.collection.mutable.ArrayBuffer;

import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SimilarityService {

    private final SparkSqlManager ssm;
    public SimilarityRes checkSimilarity(SimilarityReq reqDto) throws JSchException {
        SimilarityRes result = new SimilarityRes(new ArrayList<LyricPairDto>());
        //유사도 검사 라이브러리 사용을 위한 객체
        JaroWinklerSimilarity js = new JaroWinklerSimilarity();
        //사용자가 입력한 가사가 한 줄씩 들어있는 배열
        String[] userLyricList = reqDto.getUserLyricList();

        //session 설정
//        SparkSqlManager ssm = new SparkSqlManager();
        //db 및 테이블 설정
        Dataset<Row> dataset = ssm.selectTable("music_line");


        Object[] tempList = new Object[(int)dataset.count()];
        dataset.select("title", "artist", "lyric").getRows((int)dataset.count(),50).copyToArray(tempList, 3);

        for(int i=0, arrSize=userLyricList.length;i<arrSize;i++) { //사용자가 입력한 가사 한 줄에 대해
            //임시로 유사한 가사와 해당 곡제목, 가수를 넣어둘 리스트 -> 나중에 정렬할 것
            List<LyricInfo> similarLyrics = new ArrayList<>();
            LyricPairDto lpd = new LyricPairDto(userLyricList[i], new String[3], new String[3], new String[3]);

            for (int j = 4, size = (int) dataset.count(); j < size; j++) { //전체 가사를 대상으로 유사도 검사
                //Spark에서 읽어온 데이터 꺼내오기
                ArrayBuffer arr = (ArrayBuffer) tempList[j];
                Object[] newArr = new Object[3];
                arr.copyToArray(newArr);

                //유사도 측정
                Double ratio = js.apply(userLyricList[i], (String) newArr[2]);
                if (tempList[j] != null && ratio >= 0.75) {
                    //임시 리스트에 가사, 가수, 노래제목, 유사도(비율)넣기
                    LyricInfo info = new LyricInfo((String) newArr[0], (String) newArr[1], (String) newArr[2], ratio);
                    similarLyrics.add(info);
                }
            }

            //유사한 가사가 있을 경우
            if (!similarLyrics.isEmpty()) {
                //유사한 가사들을 비율별로 정렬
                Collections.sort(similarLyrics, new Comparator<LyricInfo>() {
                    @Override
                    public int compare(LyricInfo l1, LyricInfo l2) {
                        if (l1.getRatio() < l2.getRatio()) return 1;
                        else if (l1.getRatio() > l2.getRatio()) return -1;
                        return 0;
                    }
                });

                //상위 3개의 가사 및 곡정보를 Dto에 저장
                for (int k = 0; k < similarLyrics.size(); k++) {
                    if(k>2) break;

                    lpd.getLyricList()[k] = similarLyrics.get(k).getLyric();
                    lpd.getArtistList()[k] = similarLyrics.get(k).getArtist();
                    lpd.getTitleList()[k] = similarLyrics.get(k).getTitle();
                }

                //저장한 dto를 리스트에 추가
                result.getSimilarList().add(lpd);
            }
        }
        return result;

    }


}
