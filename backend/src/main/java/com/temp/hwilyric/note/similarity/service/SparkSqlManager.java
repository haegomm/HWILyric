package com.temp.hwilyric.note.similarity.service;

import com.jcraft.jsch.JSchException;
import lombok.extern.slf4j.Slf4j;
import org.apache.spark.SparkConf;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;


@Slf4j
@Component
public class SparkSqlManager {

    @Value("${spring.datasource.url}")
    private String db_url;
    @Value("${spring.datasource.driver-class-name}")
    private String db_driver;
    @Value("${spring.datasource.username}")
    private String db_name;
    @Value("${spring.datasource.password}")
    private String db_pw;
    private static SparkSession sparkSession;

    public SparkSession createSession() throws JSchException {
        // session 설정.
        synchronized (SparkSqlManager.class) {
            if (sparkSession == null) {
                SparkConf sparkConf = new SparkConf()
                        .setAppName("similarity")
                        .setMaster("local[*]");

                // Spark 세션 빌더
                SparkSession.Builder builder = SparkSession.builder()
                        .config(sparkConf)
                        .appName("SparkWorkerConnection");

                SparkSqlManager.sparkSession = builder.getOrCreate();
            }
        }

        return sparkSession;
    }


    /**
     * 테이블 전체 데이터 조회
     */
    public Dataset<Row> selectTable(String table) throws JSchException {
        createSession();

        //db 및 테이블 설정
        Dataset<Row> dataset = sparkSession
                .read()
                .format("jdbc")
                .option("driver", db_driver)
                .option("url", db_url)
                .option("user", db_name)
                .option("password", db_pw)
                .option("dbtable", table)
                .load();


        return dataset;
    }





}