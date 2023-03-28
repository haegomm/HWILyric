package com.holorok.hwilyric.common;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Slf4j // log를 사용하기 위한 어노테이션
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true) // 이 어노테이션을 붙이면 이 class 안에 있는 모든 메서드는 데이터를 읽기 전용으로 불러온다.
public class AwsService {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket; // S3 버킷 이름

    private final AmazonS3Client amazonS3Client;

    // S3에 파일 업로드
    public String upload(MultipartFile multipartFile, String directory) throws Exception {

        String originalName = multipartFile.getOriginalFilename(); // 파일 이름
        long size = multipartFile.getSize(); // 파일 크기

        ObjectMetadata objectMetaData = new ObjectMetadata();
        objectMetaData.setContentType(multipartFile.getContentType());
        objectMetaData.setContentLength(size);

        // S3에 업로드
        amazonS3Client.putObject(
                new PutObjectRequest(bucket + directory, originalName, multipartFile.getInputStream(), objectMetaData)
                        .withCannedAcl(CannedAccessControlList.PublicRead)
        );

        return amazonS3Client.getUrl(bucket, originalName).toString(); // 접근가능한 URL 가져오기
    }

}
