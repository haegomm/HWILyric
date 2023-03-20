package com.temp.hwilyric.note.similarity.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.similarity.JaroWinklerSimilarity;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    public void SparkSql() {
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
        Dataset<Row> load = spark
                .read()
                .format("jdbc")
                .option("driver", "com.mysql.cj.jdbc.Driver")
                .option("url", "jdbc:mysql://j8b107.p.ssafy.io:3306/hwilyric")
                .option("user", "root")
                .option("password", "hwilYRIC107")
                .option("dbtable", "keyword")
                .load();
    }

    public void checkSimilarity() {
        JaroWinklerSimilarity js = new JaroWinklerSimilarity();

        //test code
//        System.out.println(js.apply("난 묵묵히 닦을래 노력이란 다이아", "그리고 묵묵히 닦을래 노력이란 다이아"));
//        System.out.println(js.apply("가나다라마바사아자차카타파하-hakunamatata", "가나다라마바사아 hakunamatata"));
//        System.out.println(js.apply("정확히 반쯤 죽어있어", "정확히 반쯤 울고있어"));
//
//        System.out.println(js.apply("함께 가 버릴 수만 있다면 아, 얼마나 좋을까요", "지금 우리 함께 있다면 아 얼마나 좋을까요"));


    }


}
