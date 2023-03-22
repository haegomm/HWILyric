package com.temp.hwilyric.note.similarity.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.springframework.beans.factory.annotation.Value;

@Slf4j
public class SparkSqlManager {

    @Value("${spring.datasource.url}")
    private static String db_url;
    @Value("${spring.datasource.driver-class-name}")
    static private String db_driver;
    @Value("${spring.datasource.username}")
    private static String db_name;
    @Value("${spring.datasource.password}")
    private static String db_pw;
    private static SparkSession sparkSession;

    public SparkSession createSession() {
        // session 설정.
        synchronized (SparkSqlManager.class) {
            if (sparkSession == null) {
                SparkSqlManager.sparkSession = SparkSession
                        .builder()
                        .master("local[*]")
                        .appName("Java Spark SQL basic example")
                        .getOrCreate();
            }
        }

        return sparkSession;
    }


    /**
     * 테이블 전체 데이터 조회
     */
    public Dataset<Row> selectTable(String table) {
        createSession();

        // session 설정.
//        SparkSession spark = SparkSessionPool.getSparkSession();
//        SparkSession spark = SparkSession
//                .builder()
//                .appName("Spark Test")
//                .master("local[*]")
//                .getOrCreate();

        //db 및 테이블 설정
        Dataset<Row> dataset = sparkSession
                .read()
                .format("jdbc")
                .option("driver", "com.mysql.cj.jdbc.Driver")
                .option("url", "jdbc:mysql://j8b107.p.ssafy.io:3306/hwilyric")
                .option("user", "root")
                .option("password", "hwilYRIC107")
                .option("dbtable", "music")
                .load();


        return dataset;
    }





}