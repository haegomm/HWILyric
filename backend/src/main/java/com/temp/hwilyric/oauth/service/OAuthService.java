package com.temp.hwilyric.oauth.service;

import com.temp.hwilyric.exception.NotFoundException;
import com.temp.hwilyric.jwt.AuthToken;
import com.temp.hwilyric.jwt.AuthTokenProvider;
import com.temp.hwilyric.oauth.domain.AppProperties;
import com.temp.hwilyric.oauth.dto.KakaoLoginRes;
import com.temp.hwilyric.user.domain.User;
import com.temp.hwilyric.user.repository.UserRepository;
import com.temp.hwilyric.util.CookieUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class OAuthService {

    private static final String SUCCESS = "success";
    private static final String REFRESH_TOKEN = "refreshToken";

    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    private String KAKAO_CLIENT_ID;

    @Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
    private String KAKAO_CLIENT_SECRET;

    @Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
    private String KAKAO_REDIRECT_URI;

    @Value("${spring.security.oauth2.client.provider.kakao.token-uri}")
    private String KAKAO_TOKEN_URI;

    @Value("${spring.security.oauth2.client.provider.kakao.user-info-uri}")
    private String KAKO_USER_INFO_URI;

    private final UserRepository userRepository;
    private final AuthTokenProvider tokenProvider;
    private final AppProperties appProperties;

    // kakao한테 access token 받아오는 메서드
    public String getKakaoAccessToken(String code) {

        String kakaoAccessToken = "";
        try {
            URL url = new URL(KAKAO_TOKEN_URI);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=" + KAKAO_CLIENT_ID);
            sb.append("&client_secret=" + KAKAO_CLIENT_SECRET);
            sb.append("&redirect_uri=" + KAKAO_REDIRECT_URI);
            sb.append("&code=" + code);

            bw.write(sb.toString());
            bw.flush();

            int responseCode = conn.getResponseCode();
            log.debug("카카오에서 access token 받아오기 response code : {}  ", responseCode);

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            String line = "";
            String kakaoResponse = "";

            while ((line = br.readLine()) != null) {
                kakaoResponse += line;
            }
            JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse(kakaoResponse);

            kakaoAccessToken = (String) jsonObject.get("access_token");

            br.close();
            bw.close();
        } catch (Exception e) {
            log.error(e.getMessage());
        }

        return kakaoAccessToken;
    }

    @Transactional
    public ResponseEntity<KakaoLoginRes> kakaoLogin(String kakaoAccessToken, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws NotFoundException {

        HttpStatus status = null;
        KakaoLoginRes kakaoLoginRes = null;

        try {
            User kakaoUser = getKakaoInfo(kakaoAccessToken);

            if (kakaoUser == null) {
                throw new NotFoundException("카카오로부터 user 정보를 가져오지 못했습니다.");
            }

            Date now = new Date();

            AuthToken accessToken = tokenProvider.createAuthToken(
                    kakaoUser.getId(),
                    "ROLE_USER",
                    new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
            );

            long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();

            AuthToken refreshToken = tokenProvider.createAuthToken(
                    appProperties.getAuth().getTokenSecret(),
                    new Date(now.getTime() + refreshTokenExpiry)
            );

            log.debug("accessToken : {}", accessToken.getToken());
            log.debug("refreshToken : {}", refreshToken.getToken());

            kakaoUser.saveRefreshToken(refreshToken.getToken());
            log.debug("kakaoUser 리프레시 토큰 저장한 후 : {}", kakaoUser.getRefreshToken());
            userRepository.saveAndFlush(kakaoUser);

            kakaoLoginRes = KakaoLoginRes.builder()
                    .nickname(kakaoUser.getNickname())
                    .profileImg(kakaoUser.getProfileImg())
                    .userType("KAKAO")
                    .accessToken(accessToken.getToken())
                    .build();

            int cookieMaxAge = (int) refreshTokenExpiry / 60;

            CookieUtil.deleteCookie(httpServletRequest, httpServletResponse, REFRESH_TOKEN);
            CookieUtil.addCookie(httpServletResponse, REFRESH_TOKEN, refreshToken.getToken(), cookieMaxAge);
            status = HttpStatus.ACCEPTED;

        } catch (IllegalArgumentException e) {
            log.error("로그인 실패 : {}", e.getMessage());
            throw new IllegalArgumentException("카카오로부터 user 정보를 가져오지 못했습니다.");
        }

        return new ResponseEntity<KakaoLoginRes>(kakaoLoginRes, status);

    }

    public User getKakaoInfo(String kakaoAccessToken) {
        User user = null;

        try {
            URL url = new URL(KAKO_USER_INFO_URI);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", "Bearer " + kakaoAccessToken);
            int responseCode = conn.getResponseCode();
            log.debug("responseCode : {} ", responseCode);

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            String line = "";
            String kakaoResponse = "";

            while ((line = br.readLine()) != null) {
                kakaoResponse += line;
            }

            log.debug("카카오에서 사용자 정보 가져오기 response body : {} ", kakaoResponse);

            JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse(kakaoResponse);

            Map<String, Object> kakao_account = (Map<String, Object>) jsonObject.get("kakao_account");

            String email = (String) kakao_account.get("email");
            log.debug("kakao에 등록된 이메일 : {}", email);

            user = userRepository.findByEmail(email).orElse(null);

            if (user != null) {
                log.debug("카카오로 로그인을 한 적이 있는 user입니다.");
            } else {
                log.debug("카카오 로그인 최초입니다.");

                String nickname = "kakao" + (userRepository.count() + 1);
                LocalDateTime createdDate = LocalDateTime.now();

                user = new User(email, nickname);

                return userRepository.saveAndFlush(user);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
        }
        return user;
    }

}
