-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: j8b107.p.ssafy.io    Database: hwilyric
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `email` varchar(100) NOT NULL COMMENT '이메일(아이디)',
  `password` varchar(100) DEFAULT NULL COMMENT '비밀번호',
  `nickname` varchar(20) NOT NULL COMMENT '닉네임',
  `profile_img` varchar(200) NOT NULL COMMENT '프로필 이미지',
  `user_type` varchar(15) NOT NULL COMMENT '사용자 타입(NORMAL:일반,  KAKAO:카카오톡)',
  `refresh_token` varchar(200) DEFAULT NULL COMMENT 'refresh토큰',
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '가입일시',
  `updated_date` datetime DEFAULT NULL COMMENT '수정일시',
  `role` varchar(15) NOT NULL DEFAULT 'ROLE_USER' COMMENT 'spring  security용 컬럼',
  `is_active` tinyint(1) NOT NULL DEFAULT '1' COMMENT '회원상태(1 : 활성화, 0 : 탈퇴)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname` (`nickname`),
  UNIQUE KEY `refresh_token` (`refresh_token`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'gbjhgy@naver.com','$2a$10$fTgg143QcJs4jYvInA8y0erfJgB..lr1JAE78zq1hVsvWbRUK8nY.','asdf','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/sh.jpg','NORMAL','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODAwNzg4Njc5MDgsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODA2ODM2Njd9.Fyp0DX5MI4t_NwJENzClKe4lvaor5INl1CyoQ5HMc48','2023-03-29 17:33:27','2023-03-29 17:34:28','ROLE_USER',1),(2,'ddd@naver.com','$2a$10$3oO2mPRh5/EVNy7lix8lFu5sh0eZs3GHSDmEVJRbR2MbXYOLQvIbe','dddd','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/sh.jpg','NORMAL','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODAzNjk2MjkxNDksImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODA5NzQ0Mjl9.f0VumadvNnXCXZV6BGti7fRhqAr8_fEEcmX8urqB-4k','2023-03-31 16:47:55','2023-04-01 17:20:29','ROLE_USER',1),(3,'la_fille_@naver.com',NULL,'kakao3','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA3NDA0MDg4ODEsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEzNDUyMDh9.vxL_CoeeKQzbT_bJ5DTmNMQsbIHeNV_8wrEuCfZaPfc','2023-04-01 06:57:59','2023-04-06 00:20:09','ROLE_USER',1),(4,'rkdms@rkdms.com','$2a$10$zleZ72t7VIqeeGN8R7qXvORmxKZfrntl98/QZJCYAK/7Yygmpx1XG','큩가','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/%EC%97%85%EB%A1%9C%EB%93%9C%20%ED%85%8C%EC%8A%A4%ED%8A%B8.jpg','NORMAL','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA3NjM3MzEzMjQsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEzNjg1MzF9.BnEKpvOOWBP_qezGs2IG_h-eQINhAySpEbAktKeWVSs','2023-04-01 09:18:54','2023-04-06 06:48:51','ROLE_USER',1),(5,'test2@ssay.com','$2a$10$rWcWmXv6RrKckKh8xes8W.RFybg.Eu5azai1l7Y.iTiObtC7U8E.a','테스트2','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','NORMAL','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODAzNDQ3NDUxNzYsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODA5NDk1NDV9.ZJX6klEFyLvHAPE9OQulzCkxdcuho3cqWLcqX1ZaYqE','2023-04-01 09:33:32','2023-04-01 10:25:45','ROLE_USER',1),(6,'test3@ssafy.com','$2a$10$mIHUMtMCtwi4qUaqhkNdwu4KUIZcapkGfhtDHWAtgcaRxtSgt8Ls.','테스트3','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/free-icon-question-mark-5726775.png','NORMAL','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODAzNjk3ODM4MDUsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODA5NzQ1ODN9.3IVGwr3VTGkvrbd0oxEUQ5VSdHHmQ7h70lh5-wHil6s','2023-04-01 12:32:40','2023-04-01 17:23:04','ROLE_USER',1),(24,'wjdwn6@naver.com','$2a$10$hkhGxgGjuBXvWJUFi07Fa.9ABp307.NAZgWVcntWJrS66fUrM1e5S','wjdwn3','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/jwt.png','NORMAL',NULL,'2023-04-01 23:39:34','2023-04-01 23:39:34','ROLE_USER',1),(25,'wjdwn7@naver.com','$2a$10$hmp.sG.6AxLg3UYyF/IG.e.IJIu.Bm2LCyhk64R0j.t/UAGqr6r/q','wjdwn4','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/spring%20boot.png','NORMAL',NULL,'2023-04-01 23:40:32','2023-04-01 23:40:32','ROLE_USER',1),(26,'wjdwn8@naver.com','$2a$10$d5ZJglPlY0oSxCaZklZnvupHIAuqFagNEsTgVqobtZSAciMpc/eLa','wjdwn5','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/Hadoop.png','NORMAL',NULL,'2023-04-01 23:42:47','2023-04-01 23:42:47','ROLE_USER',1),(27,'wjdwn9@naver.com','$2a$10$h6T38tMc5MT3dug9HabFwOPAbxvz5eGI8QjGbCUM4/FdGVPlAxPuS','wjdwn6','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/Hadoop.png','NORMAL',NULL,'2023-04-01 23:48:47','2023-04-01 23:48:47','ROLE_USER',1),(28,'wjdwn10@naver.com','$2a$10$UmfxuyPuHIvRtnMNOTypReJTkS2.L1whEzEcDFzXEWIHZupnkpUzG','wjdwn7','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/cindy.png','NORMAL',NULL,'2023-04-01 23:49:47','2023-04-01 23:49:47','ROLE_USER',1),(29,'wjdwn11@naver.com','$2a$10$eiTST0GLUtN.SgtgHdIwleATGCmWJBl3BLlnEEmMweoe686NWyD2i','wjdwn8','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/cindy.png','NORMAL',NULL,'2023-04-01 23:50:51','2023-04-01 23:50:51','ROLE_USER',1),(30,'wjdwn12@naver.com','$2a$10$EZhVJdIWEhALiv9CeSFNQOpZ2J2Jn5fUwLlXIc5Fprr3OwnP8omfO','wjdwn9','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/cindy.png','NORMAL',NULL,'2023-04-01 23:52:21','2023-04-01 23:52:21','ROLE_USER',1),(35,'sonmh79@naver.com',NULL,'kakao16','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO',NULL,'2023-04-01 16:07:40','2023-04-06 05:12:41','ROLE_USER',1),(37,'wjdwn14@naver.com','$2a$10$Y46EEGZehtkL2xBRKmEUrOAjYRVU4/em.dkY2bnJsS/ksRJzT9Y/i','wjdwn11','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/zzangjeolmi2.png','NORMAL',NULL,'2023-04-02 02:14:23','2023-04-02 02:14:23','ROLE_USER',1),(38,'test4@ssafy.com','$2a$10$btD0kPZ8ttEeqqqes0HeBOUyS3JtwvhjZLyxpJzs44B2qbI97Vr3u','테스트4','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/ED86A0EAB28CED94BC.gif','NORMAL',NULL,'2023-04-01 17:52:25','2023-04-06 06:24:24','ROLE_USER',1),(39,'rkdms4054@naver.com',NULL,'kakao18','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO',NULL,'2023-04-02 18:20:25','2023-04-02 19:15:39','ROLE_USER',1),(40,'5120a@naver.com',NULL,'kakao19','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA1MDk0MzkyNTksImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODExMTQyMzl9.epcVNGjaxYhnb6nw1KMxg5UHCWKLOD4Y1NAryOEO7wc','2023-04-03 08:10:39','2023-04-03 08:10:39','ROLE_USER',1),(41,'oth5447@naver.com',NULL,'대전2반연예인이가은','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA2ODYxNDkzNjcsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyOTA5NDl9.ztHyn5OM2PtPYkekavuJSQ4GCayGYwoG0WGuTDvyTbs','2023-04-04 12:11:15','2023-04-05 09:15:49','ROLE_USER',1),(42,'juliejamin@naver.com',NULL,'hey','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/sh2.jpg','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA3NTc1ODg1OTUsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEzNjIzODh9.740ZxRRn8jfYPa-taGEb_5U8075DveowfVSSjqRPhiE','2023-04-05 00:56:36','2023-04-06 05:06:29','ROLE_USER',1),(43,'---mp@daum.net',NULL,'kakao22','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/%EC%A0%9C%EB%A6%AC%EC%9D%B8%EC%82%AC-%EC%A1%B4%EC%A4%91.gif','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA3NjI1NDUwMDUsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEzNjczNDV9.viHj0yV0QZI3qIQ-xzBRVbJHhUO8vZhl9_tjPNyuYnc','2023-04-05 00:57:45','2023-04-06 06:29:05','ROLE_USER',1),(44,'tjwlsdud33@naver.com',NULL,'kakao23','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO',NULL,'2023-04-05 01:24:30','2023-04-05 01:25:07','ROLE_USER',1),(45,'joen00@naver.com',NULL,'kakao24','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO',NULL,'2023-04-05 03:26:30','2023-04-05 03:27:10','ROLE_USER',1),(46,'min95913@naver.com',NULL,'kakao25','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA2ODYzMjI5ODQsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyOTExMjJ9.JqkzbzF6w2jtOO-1XK8pt2gaCX-q9kc4xiSpB1gUeDQ','2023-04-05 09:18:43','2023-04-05 09:18:43','ROLE_USER',1),(47,'tmxk0542@naver.com',NULL,'kakao26','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA2OTM3OTI2MTYsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEyOTg1OTJ9._cQ5f3lPSAfDhG0HFh7DD8dn2BF1xbYXA0Ucw98n8z0','2023-04-05 11:23:13','2023-04-05 11:23:13','ROLE_USER',1),(48,'cqe1155@gmail.com',NULL,'kakao27','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA3MDYwNzgzNTEsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEzMTA4Nzh9.WYba-aY9z1tuPZ_zZiulqSN0jjI7K21ihHahRASJnNg','2023-04-05 14:38:40','2023-04-05 14:47:58','ROLE_USER',1),(49,'qwertyui1223@naver.com',NULL,'kakao28','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA3MDc1MzY2MjUsImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEzMTIzMzZ9.cOFHZClh-b1BTs7KS3VlkpJZGY1ew2vlwb1o5S45pF4','2023-04-05 15:12:17','2023-04-05 15:12:17','ROLE_USER',1),(50,'wjdwn@wjdwn.com','wjdwnwjdwn','wjdwnek','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/%EC%97%85%EB%A1%9C%EB%93%9C+%ED%85%8C%EC%8A%A4%ED%8A%B8.jpg','NORMAL','','2023-04-05 16:26:04','2023-04-05 16:26:04','ROLE_USER',1),(51,'wjdwn787@gmail.com','$2a$10$X0zf/58Hrwd9Ni/IUXMyT.A6AOvUYSzavuoJKqxPeUzCnHwPQ6Q7y','정주임','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','NORMAL',NULL,'2023-04-05 16:34:09','2023-04-06 04:28:47','ROLE_USER',1),(52,'hjj950303@naver.com',NULL,'kakao30','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/hwilyric_logo.png','KAKAO','eyJ0eXBlIjoiSldUIiwiY3JlYXRlZERhdGUiOjE2ODA3MzE0NTc1ODksImFsZyI6IkhTMjU2In0.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2ODEzMzYyNTd9.AdNPp-qx5xHlh341HjTAtMhbX0KGUM779QXMyJhEJGI','2023-04-05 21:50:58','2023-04-05 21:50:58','ROLE_USER',1),(54,'ssafy123@ssafy.com','ssafy123!!','ssafy','https://holorok-hwilyric-bucket.s3.ap-northeast-2.amazonaws.com/profile/%EC%A0%9C%EB%A6%AC%EC%9D%B8%EC%82%AC-%EC%A1%B4%EC%A4%91.gif','NORMAL',NULL,'2023-04-06 03:47:57','2023-04-06 03:47:57','ROLE_USER',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-06 16:07:55
