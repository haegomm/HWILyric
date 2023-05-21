# 프로젝트 개요

### SSAFY 8기 2학기 특화 프로젝트

UCC: https://youtu.be/vb-LIuhSt_w

기간: 2023.02.27 ~ 2023.04.07 (40일)

수상: 싸피 2학기 특화 프로젝트 우수상 🏆

# 프로젝트 소개

💌 **서비스명**
- 휘리릭

🎯 **주요 타깃**
- 작사를 처음 시작하는 아마추어 작사가 또는 작사에 입문하고 싶은 사람

🎙 **서비스 설명**
- 바쁜 일상에도 초보 작사가들의 쉽고 간편한 작사를 지원하는 서비스입니다. 
- 데이터 시각화를 통해 인사이트를 제공합니다.
- 키워드 추천 및 작사 기능으로 꾸준하고 체계적인 연습을 할 수 있는 환경을 지원합니다.

🎵 **주요 서비스**

- 작사하기: 기본적인 작사 기능과 작사를 지원하기 위해 연관/라임/랜덤 키워드 추천 및 레퍼런스 기록, 음악 재생 기능 
- 트렌드 시각화: 가사 트렌드를 시기별로 시각화 기능 
- 작사노트 모아보기: 마이페이지에서 내가 작사한 가사들을 파트별로 한 눈에 모아보기 기능

# 주요 화면 및 기능

- 주요 화면은 **메인**, **트렌드 시각화**, **작사 노트**, **회원**이 있다.
- **라이트 모드**와 **다크 모드** 두 가지 버전으로 서비스를 이용할 수 있다.

## 1. 메인

- 중앙 하단에서 주제 키워드를 추천받을 수 있다. 
    - 키워드를 클릭하면 해당 키워드로 제목으로 작사노트 작성을 시작할 수 있다.
- 우측 주간 리포트에서 매주 신곡을 분석한 데이터를 확인할 수 있다.
    - 신곡에서 많이 사용된 키워드를 추천받을 수 있다.
    - 키워드를 클릭하면 해당 키워드를 제목으로 작사노트 작성을 시작할 수 있다.
    - 신곡이 많이 나온 장르를 확인할 수 있다.
    
라이트 모드 
    
![메인1](etc/assets/BeforeLogin-writeWithKeyword(light).gif)
    
다크 모드

![메인2](etc/assets/BeforeLogin-writeWithKeyword(dark).gif)

## 2. 트렌드 시각화

- 메인 페이지에서 가로 스크롤을 이용해 트렌드 시각화 페이지로 이동할 수 있다.
- 1970년도부터 현재까지 연도별 유행 장르 및 대표곡, 인기 키워드를 차트로 확인할 수 있다.
- 인기 키워드를 클릭하면 해당 키워드로 작사노트 작성을 시작할 수 있다.
    
라이트 모드

![트렌드1](/etc/assets/BeforeLogin-main-trend(light).gif)
    
다크 모드

![트렌드2](/etc/assets/BeforeLogin-main-trend(dark).gif)

## 3. 작사 노트

- 화면 우측에는 가사를 쓸 수 있는 **노트 작성** 기능이 있다.
- 화면 좌측에는 작사를 지원하는 4가지 탭(**키워드 추천**, **레퍼런스**, **유사도 검사**, **내 가사**)이 있다.

### 3-1. 노트 작성 

- verse, hook 등 가사의 타입을 지정하고 가사를 작성할 수 있다.
- 한 블록 단위로 가사를 작성하며, 각 블록은 드래그 앤 드롭을 이용하여 순서를 자유롭게 변경할 수 있다.
- 로그인 시 3분마다 자동 저장이 가능하다.
- 로그인을 하지 않은 경우 최대 하루동안 가사 내용이 저장된다.

라이트 모드

![노트1](/etc/assets/BeforeLogin-note-write-dragAndDrop(light).gif)

다크 모드

![노트2](/etc/assets/BeforeLogin-note-write-dragAndDrop(dark).gif)

### 3-2. 키워드 추천 탭

- 연관 키워드: 사용자가 입력한 키워드와 의미적으로 연관이 있는 키워드 목록을 추천받을 수 있다.
- 라임 키워드: 사용자가 입력한 키워드와 라임을 형성할 수 있는 키워드 목록을 추천받을 수 있다.
- 랜덤 키워드: 새로고침 버튼을 누를 때마다 랜덤으로 영감을 줄 수 있는 키워드 목록을 추천받을 수 있다.

라이트 모드

![키워드1](etc/assets/NoteTab-Keyword(light).gif)

다크 모드

![키워드2](etc/assets/NoteTab-Keyword(dark).gif)

### 3-3. 레퍼런스 탭

- 사진 등록: 작사 노트의 썸네일 사진을 업로드할 수 있다.
- 메모: 작사를 하면서 영감을 받은 내용들을 기록할 수 있다.
- Youtube 음악 재생: 작사를 하면서 함께 들을 음악을 검색&재생할 수 있다.

라이트 모드

![레퍼런스1](etc/assets/AfterLogin-noteTab-reference(light).gif)

다크 모드

![레퍼런스2](etc/assets/AfterLogin-noteTab-reference(dark).gif)

### 3-4. 유사도 검사 탭

- 사용자가 작성한 가사와 유사한 가사를 찾아서 보여준다.

라이트 모드

![유사도1](etc/assets/NoteTab-checkSimilarity(light).gif)

다크 모드

![유사도2](etc/assets/NoteTab-checkSimilarity(dark).gif)

### 3-5. 내 가사 탭

- 내가 쓴 가사를 타입 별로 모아볼 수 있다.

라이트 모드

![내가사1](etc/assets/AfterLogin-noteTab-myLyric(light).gif)

다크 모드

![내가사2](etc/assets/AfterLogin-noteTab-myLyric(dark).gif)

## 4. 회원 관리

### 4-1. 로그인

- 일반 로그인과 카카오 로그인이 가능하다.
- 일반 로그인 시 이메일 인증이 필요하다.
    
라이트 모드

![로그인1](etc/assets/Login-Signup(light).gif)

다크 모드

![로그인2](etc/assets/Login-Signup(dark).gif)

### 4-2. 회원 정보 관리

- 닉네임, 프로필 사진 등을 편집할 수 있다.
- 비밀번호를 분실한 경우 임시 비밀번호를 이메일로 발급받을 수 있다.

라이트 모드

![회원정보관리1](etc/assets/AfterLogin-mypage-modifyProfile(light).gif)

다크 모드

![회원정보관리2](etc/assets/AfterLogin-mypage-modifyProfile(dark).gif)

## 기술 차별점

### 데이터 크롤링 & 시각화

- 멜론의 음악 차트를 크롤링하여 음악과 가사 데이터를 취합하고, 이를 통해 DB를 구축했다.
- 각 음악과 가사의 데이터들을 spark를 사용하여 빠르게 처리하고, 대규모 DB를 생성했다.
- 다양한 테이블로 분류화된 데이터들을 차트와 그래프, 워드 클라우드 등을 통해 체계적으로 표현하고, 이러한 데이터 표현이 작사의 시작으로 이어질 수 있도록 구현했다.

### 자동 배포 파이프라인 구축

- 깃랩-젠킨스을 연동해 개발한 코드를 빠르게 배포 환경에서 테스트해볼 수 있는 CI/CD 자동 배포 파이프라인을 구축했다.
- 또한, 깃랩-젠킨스-소나큐브 파이프라인을 구축하여 지속적인 정적 코드 분석을 통해 코드의 품질을 향상시키기 위해 노력했다.

### 연관 키워드 - Word2Vec 모델

- 크롤링 하여 모은 가사 데이터에서 사용된 단어들의 군집화를 위해 단어를 벡터로 변환해 주는 임베딩 표현 방법인 Word2Vec을 사용했다.
- Word2Vec의 방식 중 중심 단어로 주변 단어를 예측하는 Skip-gram 방식을 이용하여 학습시켰고 정확도를 높이기 위해 벡터의 차원과 컨텍스트 윈도우 크기, 단어 최소 빈도 수 제한 등의 값을 조절하며 학습시켰다.
- 사용자가 입력한 키워드에서 Okt 형태소 분석기를 사용하여 유의미한 단어를 추출 & 벡터화한 후 학습된 Word2Vec 모델과 비교하여 가장 1에 가까운 단어들을 반환한다.

### 유사도 검사 - Jaro-Winkler 알고리즘

- Apache의 StringUtils 유틸리티 클래스에서 제공하는 알고리즘 중 Jaro-Winkler 알고리즘을 사용했다.
- 두 문자열이 같은 문자열이 되려면 문자열 조작이 얼마나 일어나야 하는지 계산한 편집거리를 구하는 것과 추가적으로 같은 낱말이 문자열 내 특정한 거리 내에 있을 때와 문자열이 일치하는 방향이 동일할 때 가중치를 주어 일반적인 레벤슈타인 거리를 구하는 것보다 정교한 비교가 가능하다.
- 유저가 입력한 여러 줄의 가사를 `\n` 를 기준으로 분리하여 가사 한 줄에 마다 음원사이트에 등록된 가사 데이터 한 줄과 비교하여 유사한 가사들을 찾고, 가중치가 높은 순서대로 정렬하여 상위 3개의 가사를 반환한다.
- 이 과정에서 약 20만 행의 가사 데이터를 빠르게 읽고 처리하기 위해 Spark를 사용하여 API 요청 응답 시간을 3초-5초 내로 줄였다.

### Nosql을 이용한 유연한 데이터 저장 - MongoDB

- 유저가 가사를 블록 단위로 입력하고 각 블록은 타입을 가지고 있으며, 모든 블록의 순서와 존재 유무가 가변적인 것 등 유연한 데이터 형식을 저장하기 위해 MySQL 외 MongoDB를 사용하여 json 형태로 데이터를 저장했다.
- 3분 마다 유저의 데이터를 자동으로 저장하는 자동저장 기능으로 인해 데이터의 형식과 내용이 수시로 바뀌는 상황에서 데이터의 원본 손실을 방지했다.
- 첫 저장 시에는 MongoDB에서 자동으로 생성해주는 ObjectID를 부여하는 방식을 사용했고, 이후 저장 시에는 해당 ObjectID를 이용하여 기존의 데이터를 수정하는 방식을 사용했다.

## 개발환경

### Frontend

- node.js `18.13.0 (LTS)`
- react `18.2.0`
    - Recoil `0.7.6`
- typescript `4.9.5`
- react-dom `18.2.0`
- axios `1.2.6`
- styled-components `5.3.6` (`주의`최신버전아님!)

### Backend

- java `1.8`
- spring `2.7.9`
- jpa `2.2`
- querydsl `5.0.0`
- gradle `7.6.1`
- django `4.2`

### Crawling

- python `3.8.10`
- pymysql `1.0.2`
- pandas `1.5.3`
- selenium `4.8.2`

### Hadoop

- hadoop `3.3.1`
- spark `3.0.16`

### Database

- mysql `8.0.30`
- mongodb `6.0.3`
- AWS S3 `1.12.281`

### Infra

- ubuntu `20.04 LTS`
- nginx `1.18.0 (Ubuntu)`
- jenkins `2.387.1`
- docker `23.0.2`
- sonarqube `4.8.0.2856`

### IDE

- intellij `2022.3.1`
- pycharm `2022.3.1`
- vscode `1.77.0`

## 프로젝트 구조

### Frontend (React)

```bash
frontend/
└── hwilyric
    ├── public
    └── src
        ├── api
        ├── assets
        │   ├── home
        │   ├── icon
        │   ├── socialLogin
        │   └── writeSideBar
        ├── atoms
        ├── components
        │   ├── common
        │   ├── home
        │   │   └── dataVisualize
        │   ├── login
        │   ├── mypage
        │   ├── profileModification
        │   ├── signup
        │   └── write
        │       ├── note
        │       └── sidebar
        ├── features
        ├── pages
        ├── styles
        │   └── common
        ├── theme
        └── types
```

### Backend (Spring Boot)

```
backend/
├── gradle
│   └── wrapper
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── holorok
    │   │           └── hwilyric
    │   │               ├── common
    │   │               ├── config
    │   │               ├── exception
    │   │               ├── jwt
    │   │               ├── oauth
    │   │               │   ├── domain
    │   │               │   ├── dto
    │   │               │   └── service
    │   │               ├── trend
    │   │               │   ├── controller
    │   │               │   ├── domain
    │   │               │   ├── dto
    │   │               │   ├── repository
    │   │               │   └── service
    │   │               ├── user
    │   │               │   ├── controller
    │   │               │   ├── domain
    │   │               │   ├── dto
    │   │               │   ├── handler
    │   │               │   ├── repository
    │   │               │   └── service
    │   │               ├── util
    │   │               └── works
    │   │                   ├── keyword
    │   │                   │   ├── controller
    │   │                   │   ├── domain
    │   │                   │   ├── repository
    │   │                   │   └── service
    │   │                   ├── note
    │   │                   │   ├── controller
    │   │                   │   ├── domain
    │   │                   │   ├── dto
    │   │                   │   ├── repository
    │   │                   │   └── service
    │   │                   ├── rhyme
    │   │                   │   ├── controller
    │   │                   │   ├── dto
    │   │                   │   └── service
    │   │                   └── similarity
    │   │                       ├── controller
    │   │                       ├── dto
    │   │                       └── service
    │   └── resources
    └── test
        ├── META-INF
        └── java
            └── com
                └── holorok
                    └── hwilyric
```

### Backend (Django)

```
backend-recommend/
├── hwilyric
│   └── hwilyric
└── similarkeyword
```

### Crawling

```
crawling/
├── korean
├── melon
└── preprocess
```

### Hadoop

```
hadoop/
├── requirements.txt
├── spark_trend_genre.py
└── spark_trend_keyword.py
```

## 와이어프레임

라이트 모드

- 메인 화면

![메인1](/etc/assets/Main(light).png)

- 작사하기

![작사하기1](/etc/assets/Write(light).png)

- 마이페이지

![마이페이지1](/etc/assets/Mypage(light).png)

- 회원가입, 로그인

![회원1](/etc/assets/Signup_login(light).png)

다크 모드

- 메인 화면

![메인2](/etc/assets/Main(dark).png)

- 작사하기

![작사하기2](/etc/assets/Write(dark).png)

- 마이페이지

![마이페이지2](/etc/assets/Mypage(dark).png)

- 회원가입, 로그인

![회원2](/etc/assets/Signup_login(dark).png)

## ERD

![erd](/etc/assets/hwilyric_erd.png)

## 서비스 아키텍처

![아키텍처](/etc/assets/architecture.png)

## 협업 툴

- Git
- GitLab
- Jira
    - 최종 지라 이슈 **전국 151팀 중 1위** 달성 - 즉, 우리는 스프린트 회의를 열심히 했다.
    
    ![지라](/etc/assets/jira_king.png)

- Notion
- Mattermost

## 협업 환경

### Git으로 협업하기

Git을 통한 협업 방식은 [우아한 형제들 Git Flow](https://techblog.woowahan.com/2553/)를 기본 베이스로 삼았습니다.

브랜치는 master, develop, dev-front, dev-back, feature 총 5가지를 사용했으며 전략은 다음과 같습니다.

- `master`: 서비스가 출시될 수 있는 브랜치입니다. master 브랜치에 올라온 기능들은 에러 없이 작동하는 상태입니다.
- `develop`: 다음 서비스 출시를 위해 실제 개발이 이루어지는 브랜치입니다.
- `dev-front`, `dev-back`: develop 브랜치에서 분기해서 프론트엔드와 백엔드가 각각 개발하는 브랜치입니다. 프론트엔드와 백엔드 충돌을 최대한 방지하기 위해 만들어졌습니다.
- `feature`: 기능 단위 개발을 위한 브랜치로 dev-front, dev-back에서 분기하여 개발이 끝나면 각각 베이스 브랜치로 병합됩니다.

매주 한 번 이상 dev-front, dev-back 브랜치를 develop 브랜치로 병합 후 배포하여 실제 배포 환경에서 잘 동작하는지 여부를 확인했습니다.

### Jira로 협업하기

매주 월요일 스프린트 회의를 통해 그 주의 목표를 세우고 목표 달성을 위한 구체적인 작업들을 정리했습니다.

유튜브 라이브와 같이 공통적인 일정부터 팀 회의, 파트별 회의, 개인 개발 작업까지 회의를 통해 구체적으로 계획했습니다.

이를 위해 사용된 요소들은 다음과 같습니다.

`Epic` : 어떤 작업이 속하는 최상위 레벨로 학습, 문서, 회의, 개발, 일지 총 5가지 에픽을 만들었습니다.

`Story & Task`: Epic에 속하는 작업의 단위입니다. 구체적인 작업 내용을 작성하고  Story point로 예상 소요 시간을 산정할 수 있습니다. 한 Story와 Task 당 최대 4시간을 넘지 않게 하였고 개인별로 매주 40시간 이상 할당했습니다.

개발과 관련한 작업들은 Story, 그 외의 작업들은 Task로 분류하여 프로젝트를 진행하였습니다.

`번다운 차트`: 스프린트의 목표를 달성하기 위해 남은 시간과 남은 Story point를 확인해 프로젝트의 진척도를 파악할 수 있는 지표입니다.

### Notion으로 협업하기

회의록, 스크럼 회의, 발표 정리, 문서 정리, 기획서 등 자료들을 Notion을 통해 작성 및 관리하였습니다.

- `회의록`: 매일 회의한 내용을 회의록으로 기록하였습니다.
- `프로젝트 일지`: 개인별로 프로젝트 일지(problem-cause-solution)를 작성하였습니다. 프로젝트 일지는 개발하면서 만난 오류와 문제 상황을 정리하고 원인과 해결방법을 적습니다.
- `컨벤션`: 프로젝트의 모든 컨벤션들을 문서화하여 모두가 공유 가능하도록 하였습니다. 기록 및 정리한 컨벤션들에는 Git 컨벤션, Jira 컨벤션, FE 컨벤션, BE 컨벤션이 있습니다.
- `프로젝트 문서 관리`: 요구사항 정의서, 기능명세서, 일정관리 등 공유 문서 관리를 노션에 기록하여 모두가 동일한 목표를 가지고 개발 할 수 있도록 하였습니다.

## 팀원 역할 - 각자 담당 내용 적기

손민혁 - 팀장, 인프라, 데이터 크롤링

권오연 - 프론트엔드 개발, 라임 추천 기능 개발

이가은 - 프론트장, 작사하기, 테마 구현, ui&ux

황정주 - 백엔드장, 회원관리 구현, 연관 키워드 구현(Word2Vec 모델 이용), Spring Security, JWT 적용, django 담당, S3 세팅 

백자민 - mongoDB & Querydsl CRUD API 구현, 유사도 검사 기능 구현, Spark, UCC 

유덕균 - 웹 크롤링을 통한 데이터 수집, Spark를 활용한 데이터 처리, 데이터 시각화 API 설계 및 데이터 시각화 페이지 구현, Hadoop 클러스터 서버 활용.

## 프로젝트 산출물

[API Docs](/etc/assets/api_docs.pdf) | [기능 명세서](/etc/assets/functional_specification.pdf) | [ERD](/etc/assets/hwilyric_erd.png) | [깃 컨벤션](/etc/assets/git_convention.pdf) | [포팅 메뉴얼](/exec/porting_manual.pdf)

## 회고

### 손민혁

팀원들과 열정적인 6주를 보냈습니다! 특히나 실제 아마추어 작사가라는 사용자를 타겟으로 인터뷰도 해보고 그것을 기반으로 기획/설계/개발까지 해볼 수 있어서 특별했던 프로젝트였습니다. 그래서 더 의욕적으로 많은 아이디어를 제시하였고 구현해야 할 많은 기능으로 인해 부담이 컸을텐데 결국 모두 완성시킨 팀원들 너무 멋집니다 !!

처음으로 인프라를 담당하게 되었습니다. 기본적인 프론트엔드 및 백엔드 지식부터 네트워크 지식까지 필요하다 보니 쉽지는 않았지만 팀원들 덕분에 무사히 배포를 마칠 수 있었습니다. ubuntu 환경이 낯설어 우당탕탕 EC2를 네 번이나 초기화하는 일이 있었지만, 덕분에 개발환경 세팅을 네 번씩 하면서 명령어가 많이 익숙해졌습니다 :) 또, 이번에 소나큐브도 연결해보며 코드 분석을 해볼 수 있어 재밌었지만 팀원들에게 개발하기도 바쁜데 코드 리펙토링이라는 추가적인 과제를 준 것만 같아 미안하기도 하네요 ㅎㅎ 조금이라도 도움이 되었길 바랍니다. 순탄하지 않았던 배포 과정을 기다려준 팀원들에게 감사합니다.

모두가 이번 프로젝트를 통해 해보고 싶었던 분야에 도전하고 그만큼 많이 얻어갔을 뿐만 아니라 프로젝트까지 무사히 마칠 수 있어서 뿌듯합니다. 호로록 팀 최고 !!

### 권오연


### 이가은

새로운 기술을 학습하며 프로젝트에 임한 팀원 모두들 고생이 많으셨습니다. 기획부터 구현까지 각자 맡은 역할에 최선을 다해주셔서 잘 마무리할 수 있었던 것 같습니다. 개인적으로 개발에서 이전보다 효율적인 코드를 짰던 프로젝트라 뿌듯합니다! 

### 황정주

우선 팀원분들에게 너무 고맙습니다. 개인적으로 이번에 자바뿐만 아니라 전반적으로 Backend 지식에 있어서 부족함을 많이 느꼈는데 그런 부분들을 팀원들이 채워준 것 같습니다. 우리 팀원이 아니었다면 이렇게 프로젝트를 마무리하기 어렵지 않았나 싶습니다. 다음에 기회가 된다면 제가 어설프게 구현해 놓은 기능을 원래 계획에 맞게 다시 구현해 보고 싶습니다.  이외에 팀 분위기가 좋아서 재밌게 프로젝트를 진행할 수 있었고, 매일 밥 먹고 산책하면서 나무, 꽃, 청설모 등등 대전 캠퍼스 내 자연을 만끽하던 시간들은 진짜 잊지 못할 것 같습니다. 

### 백자민

이전에 사용해보지 않은 새로운 기술들을 많이 사용하면서 스스로의 부족한 역량으로 고민이 많았는데, 팀원들이 이러한 부분을 채워주었기 때문에 프로젝트를 잘 마무리한 것 같습니다. 기획부터 설계, 개발까지 적극적으로 소통해주는 팀원들 덕분에 각자의 다양한 생각을 들어보고 나누면서 생각과 경험의 폭을 넓힐 수 있었던 것 같아서 감사하고 뿌듯합니다. 개발을 늦게 시작해서 다들 빠듯한 일정에 쉴 틈 없이 달려온 것 같은데, 아쉬운 부분이 분명 남았음에도 최선을 다해서 프로젝트에 임한 만큼 이전보다 크게 한 걸음 성장했다는 생각이 듭니다.

### 유덕균
