package com.temp.hwilyric.note.similarity.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.springframework.beans.factory.annotation.Value;

@Slf4j
public class SparkSql {

    @Value("${spring.datasource.url}")
    private static String db_url;
    @Value("${spring.datasource.driver-class-name}")
    static private String db_driver;
    @Value("${spring.datasource.username}")
    private static String db_name;
    @Value("${spring.datasource.password}")
    private static String db_pw;
    private static SparkSession sparkSession;

    private SparkSession createSession() {
        // session 설정.
        synchronized (SparkSql.class) {
            if (sparkSession == null) {
                SparkSql.sparkSession = SparkSession
                        .builder()
                        .master("local[*]")
                        .appName("Java Spark SQL basic example")
                        .config("spark.sql.shuffle.partitions", 6)
                        .getOrCreate();
            }
        }

        return sparkSession;
    }


    /**
     * 테이블 전체 데이터 조회
     */
    public Dataset<Row> selectTable(String table) {

        // session 설정.
//        SparkSession spark = SparkSessionPool.getSparkSession();
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

        return dataset;
    }





}