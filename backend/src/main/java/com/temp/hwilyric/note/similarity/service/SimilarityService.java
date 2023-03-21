package com.temp.hwilyric.note.similarity.service;

import com.temp.hwilyric.note.similarity.dto.LyricPairDto;
import com.temp.hwilyric.note.similarity.dto.SimilarityReq;
import com.temp.hwilyric.note.similarity.dto.SimilarityRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.similarity.JaroWinklerSimilarity;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SimilarityService {
    @Value("${spring.datasource.url}")
    private static String db_url;
    @Value("${spring.datasource.driver-class-name}")
    static private String db_driver;
    @Value("${spring.datasource.username}")
    private static String db_name;
    @Value("${spring.datasource.password}")
    private static String db_pw;

    public SimilarityRes checkSimilarity(SimilarityReq reqDto) {
        SimilarityRes result = new SimilarityRes();
        //유사도 검사 라이브러리 사용을 위한 객체
        JaroWinklerSimilarity js = new JaroWinklerSimilarity();
        //사용자가 입력한 가사가 한 줄씩 들어있는 배열
        String[] userLyricList = reqDto.getUserLyricList();

        //Spark 기본 설정
        SparkConf conf = new SparkConf().setMaster("local").setAppName("Spark Test");
        JavaSparkContext sc = new JavaSparkContext(conf);

        //session 설정
        SparkSession spark = SparkSession
                .builder()
                .appName("Spark Test")
                .master("local[*]")
                .getOrCreate();

        //db 및 테이블 설정
        Dataset<Row> dataset = spark
                .read()
                .format("jdbc")
                .option("driver", db_driver)
                .option("url", db_url)
                .option("user", db_name)
                .option("password", db_pw)
                .option("dbtable", "music_line")
                .load();

        for(int i=0, arrSize=userLyricList.length;i<arrSize;i++) { //사용자가 입력한 가사 한 줄에 대해
            //임시로 유사한 가사를 넣어둘 리스트
            List<String> tempList = new ArrayList<>();
            for(int j=0,size=(int)dataset.count();j<size;j++) { //전체 가사를 대상으로 유사도 검사
                //dataset 조작 로직 들어갈 것.
                Dataset<Row> oneRow = dataset.select("title", "artist", "lyric").where("id랑 j 비교할 곳");
                if(js.apply(userLyricList[i], oneRow.select("lyric").toString())>=0.7) {
                    //임시 리스트에 가사, 가수, 노래제목 넣기
                    tempList.add(oneRow.select("lyric").toString());
                }
            }
        }



        return result;

    }


}
