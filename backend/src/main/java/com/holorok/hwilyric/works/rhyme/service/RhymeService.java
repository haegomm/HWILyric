package com.holorok.hwilyric.works.rhyme.service;


import com.holorok.hwilyric.common.SparkSqlManager;
import com.holorok.hwilyric.exception.InvalidInputException;
import com.holorok.hwilyric.exception.NotFoundException;
import com.jcraft.jsch.JSchException;
import lombok.RequiredArgsConstructor;
import org.apache.spark.sql.*;
import org.nd4j.common.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.util.*;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RhymeService {
    private final SparkSqlManager ssm;
    public List<String> getRhymeKeyword(String word) throws NotFoundException, JSchException, IOException {
        Dataset<Row> dataset;

        if(Pattern.matches("^[가-힣]*$",word))
            dataset = ssm.selectTableRhyme("music_rhyme").where("is_hangul = true");
        else if((Pattern.matches("^[a-zA-Z]*$",word)))
            dataset = ssm.selectTableRhyme("music_rhyme").where("is_hangul = false");
        else
            throw new InvalidInputException();

        String[] checkJaccard = dataset.collectAsList().stream()
                .map(row -> row.mkString(","))
                .toArray(String[]::new);

        String fileType = "python";
        ClassPathResource resource = new ClassPathResource("/jaccard.py");
        String pythonFilePath = resource.getFile().getAbsolutePath();
        String checkLength = String.valueOf(checkJaccard.length);

        ProcessBuilder processBuilder = new ProcessBuilder(fileType, pythonFilePath);
        Map<String, String> env = processBuilder.environment();
        env.put("word", word);
        env.put("checkLength", checkLength);
        int cnt=0;
        for(int i=0,size=Integer.parseInt(checkLength);i<size;i+=(size/10)) {
            StringBuilder sb = new StringBuilder();
            for(int j=i,jsize=i+(size/10);j<jsize;j++) {
                if(j>=size)
                    break;
                sb.append(checkJaccard[j]).append(" ");
            }
            String str = "checkJaccard"+cnt;
            env.put(str,sb.toString());
            cnt++;
        }
        env.put("count", ""+cnt);
//        env.put("checkJaccard", String.join(" ", checkJaccard));

        List<String> rhymeList = new ArrayList<>();
        try {
            Process process = processBuilder.start();

            // error stream 읽어오는 부분
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String errorLine;
            while ((errorLine = errorReader.readLine()) != null) {
            }

            // 파이썬 스크립트의 출력을 읽어옵니다.
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream(), "utf-8"));
            String line;

            while ((line = reader.readLine()) != null) {
                rhymeList.add(line);
            }
    } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
            return rhymeList;
    }
}