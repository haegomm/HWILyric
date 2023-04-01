package com.holorok.hwilyric.works.similarity.service;

import com.holorok.hwilyric.common.SparkSqlManager;
import com.holorok.hwilyric.exception.NotFoundException;
import com.holorok.hwilyric.works.similarity.dto.LyricInfo;
import com.holorok.hwilyric.works.similarity.dto.LyricPairDto;
import com.jcraft.jsch.JSchException;
import com.holorok.hwilyric.works.similarity.dto.SimilarityReq;
import com.holorok.hwilyric.works.similarity.dto.SimilarityRes;
import lombok.RequiredArgsConstructor;
import org.apache.avro.generic.GenericData;
import org.apache.commons.text.similarity.JaroWinklerSimilarity;
import org.apache.spark.sql.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import scala.collection.mutable.ArrayBuffer;

import java.util.*;


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
        String[] userLyricList = reqDto.getUserLyric();
        //db 및 테이블 설정
        Dataset<Row> dataset = ssm.selectTable("music_line");
        //Spark에서 데이터 읽어오기
        Object[] tempList = new Object[(int)dataset.count()];
        dataset.select("title", "artist", "lyric").getRows((int)dataset.count(),50).copyToArray(tempList, 3);


        for(int i=0, arrSize=userLyricList.length;i<arrSize;i++) { //사용자가 입력한 가사 한 블럭에 대해

            //가사 블록에 있는 여러 줄의 가사를 개행문자로 분리, 리스트로 생성
            List<String> oneBlock = Arrays.asList(userLyricList[i].split("\n"));

            for(String oneLine : oneBlock) {//사용자가 입력한 가사 한 줄에 대해
                //특수문자 제거
//                String fixedLyric = oneLine.replaceAll("[@&#$%*$^,./]", "");
                //임시로 유사한 가사와 해당 곡제목, 가수를 넣어둘 리스트 -> 나중에 정렬할 것
                List<LyricInfo> similarLyrics = new ArrayList<>();
                LyricPairDto lpd = new LyricPairDto(oneLine, new ArrayList<>(), new ArrayList<>(), new ArrayList<>());

                for (int j=4, size=(int)dataset.count();j<size;j++) { //전체 가사를 대상으로 유사도 검사
                    //Spark에서 읽어온 데이터 꺼내오기
                    ArrayBuffer arr = (ArrayBuffer) tempList[j];
                    Object[] newArr = new Object[3];
                    arr.copyToArray(newArr);

                    //유사도 측정
                    Double ratio = js.apply(oneLine, (String) newArr[2]);
                    if (tempList[j] != null && ratio >= 0.75) {
                        //임시 리스트에 가사, 가수, 노래제목, 유사도(비율)넣기
                        LyricInfo info = new LyricInfo((String) newArr[0], (String) newArr[1], (String) newArr[2], ratio);
                        if (similarLyrics.contains(info))
                            continue;
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
                    for (int k=0, ksize=similarLyrics.size();k<ksize;k++) {
                        if (k>2) break;

                        lpd.getLyricList().add(similarLyrics.get(k).getLyric());
                        lpd.getArtistList().add(similarLyrics.get(k).getArtist());
                        lpd.getTitleList().add(similarLyrics.get(k).getTitle());
                    }

                    //저장한 dto를 리스트에 추가
                    result.getSimilarList().add(lpd);
                }
            }
        }

        if(result.getSimilarList().isEmpty())
            throw new NotFoundException("유사한 가사가 없습니다. 특수문자가 있다면 제거하고 다시 시도해보세요!");

        return result;
    }
}
