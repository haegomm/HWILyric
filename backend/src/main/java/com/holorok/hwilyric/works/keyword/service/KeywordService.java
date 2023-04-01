package com.holorok.hwilyric.works.keyword.service;

import com.google.common.primitives.Floats;
import com.holorok.hwilyric.works.keyword.repository.KeywordRepository;
import com.holorok.hwilyric.exception.NotFoundException;
import kr.co.shineware.nlp.komoran.constant.DEFAULT_MODEL;
import kr.co.shineware.nlp.komoran.core.Komoran;
import kr.co.shineware.nlp.komoran.model.KomoranResult;
import kr.co.shineware.nlp.komoran.model.Token;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FSDataOutputStream;
import org.apache.hadoop.mapreduce.lib.input.KeyValueTextInputFormat;
import org.apache.hadoop.shaded.org.apache.commons.collections.KeyValue;
import org.apache.hadoop.shaded.org.checkerframework.checker.units.qual.K;
import org.apache.spark.SparkConf;
import org.apache.spark.SparkContext;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.input.PortableDataStream;
import org.apache.spark.ml.feature.Word2Vec;
import org.apache.spark.ml.linalg.Vector;
//import org.apache.spark.mllib.feature.Word2Vec;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
//import org.deeplearning4j.models.word2vec.Word2Vec;
import org.deeplearning4j.models.embeddings.loader.WordVectorSerializer;
//import org.apache.spark.mllib.feature.Word2VecModel;
import org.apache.spark.ml.feature.Word2VecModel;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import scala.Tuple2;
import scala.collection.JavaConverters;
import scala.collection.Seq;

import java.io.*;
import java.net.URI;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static org.nd4j.autodiff.listeners.profiler.data.Phase.V;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KeywordService {

    private final KeywordRepository keywordRepository;

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

    private static scala.collection.immutable.Map<String, float[]> toScalaImmutableMap(Map<String, float[]> pFromMap) {
        final List<Tuple2<String, float[]>> list = pFromMap.entrySet().stream()
                .map(e -> Tuple2.apply(e.getKey(), e.getValue()))
                .collect(Collectors.toList());
        Seq<Tuple2<String, float[]>> scalaSeq = JavaConverters.asScalaBufferConverter(list).asScala().toSeq();
        return (scala.collection.immutable.Map<String, float[]>) scala.collection.immutable.Map$.MODULE$.apply(scalaSeq);
    }

    // 유사 키워드 조회
    public List<String> getSimilarKeyword(String word) throws NotFoundException, IOException, ClassNotFoundException {

        return null;
    }

}
