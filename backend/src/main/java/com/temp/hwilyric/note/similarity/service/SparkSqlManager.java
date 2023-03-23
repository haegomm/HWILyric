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

                //pem 파일 경로 입력
                String privateKey = "C:\\Users\\SSAFY\\Downloads\\J8B107T.pem";

                SparkConf sparkConf = new SparkConf()
                        .setAppName("similarity")
                        .setMaster("local");

                // Spark 세션 빌더
                SparkSession.Builder builder = SparkSession.builder()
                        .config(sparkConf)
                        .appName("SparkWorkerConnection");

                // PEM 파일을 사용하여 Spark 클러스터 워커에 연결
                builder.config("spark.authenticate", "true")
                        .config("spark.network.crypto.enabled", "true")
                        .config("spark.authenticate.secret", privateKey)
                        .config("spark.executor.extraJavaOptions", "-Djavax.net.ssl.trustStore=" + privateKey)
                        .config("spark.driver.extraJavaOptions", "-Djavax.net.ssl.trustStore=" + privateKey);


//                //pem파일로 JSch 객체 생성
//                JSch jsch = new JSch();
//                jsch.addIdentity(privateKey);
//
//                //스파크 노드에 접속하기 위한 정보
//                String host = "cluster.p.ssafy.io";
//                int port = 22;
//                String user = "j8b107";
//
//                //SSH session 생성
//                Session session = jsch.getSession(user, host, port);
//                session.setConfig("StrictHostKeyChecking", "no");
//                session.connect();
//
//                //SSH tunneling configuration 얻어오기
//                String sshConnectionString = String.format("%s:%d:%s", "j8b107.p.ssafy.io", 80, host);
//                session.setPortForwardingL(22, sshConnectionString, 22);
//
//                SparkConf conf = new SparkConf().setAppName("Similarity")
//                        .set("spark.driver.extraJavaOptions", "-Dcom.jcraft.jsch.Session=session")
//                        .set("spark.executor.extraJavaOptions", "-Dcom.jcraft.jsch.Session=session")
//                        .setMaster("spark://yarn");

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