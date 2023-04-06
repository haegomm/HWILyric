import numpy as np
from pandas import Series, DataFrame

import pymysql
from gensim.models import Word2Vec
from konlpy.tag import Okt
from tqdm import tqdm
from datetime import datetime, timedelta

# -*- coding: utf-8 -*-
f_conn = open(".env")

# DB에 접근하기 위한 사전정보
# cursorclass 설정에 따라 불러온 정보를 다양한 형태로 반환해줌
# Cursor의 경우는 tuple로 반환
host = "j8b107.p.ssafy.io"
user = f_conn.readline().strip()
password = f_conn.readline().strip()
database = "hwilyric"
charset = "utf8mb4"
cursorclass = pymysql.cursors.Cursor

f_conn.close()

connection = pymysql.connect(host=host, user=user, password=password, database=database, charset=charset,
                             cursorclass=cursorclass)

cursor = connection.cursor()


table_name = "hangul_model"

# 오늘 날짜
now = datetime.now()

# 일주일 전
before = now - timedelta(weeks=1)

data = []

sql = f"select lyrics from music where lyrics not like '가사 정보 없음' and created_date between %s and %s"
# SQL문 실행
val = (before, now)
cursor.execute(sql, val)


# fetchall()은 받아온 모든 행의 튜플을 다시 튜플로 감싸서 한꺼번에 반환함
# fetchone()은 하나의 행을 튜플 하나로 반환하며, 호출할때마다 차례차례 한 행씩 반환함
# fetchmany(n)는 n개의 숫자만큼 반환함

for each_lyric in cursor.fetchall():
    data.append(each_lyric[0]) # 한 곡씩 추가

realData = {'lyrics' : data} # music 테이블에서 리스트 형태로 가져온 data를 담아준다.

train_data = DataFrame(realData)
train_data['lyrics'] = train_data['lyrics'].astype(str).str.replace("[^ㄱ-ㅎㅏ-ㅣ가-힣 ]"," ", regex=True)

# 불용어 정의
stopwords = []
with open('stopword.txt', 'r', encoding='utf-8') as word:
    for line in word:
        line = line.strip() # 줄 바꿈 문자와 공백 제거
        if line:
            stopwords.append(line)


# 형태소 분석기 OKT를 사용한 토큰화 작업 (다소 시간 소요)
okt = Okt()

tokenized_data = []
for sentence in tqdm(train_data['lyrics']):
    tokenized_sentence = okt.morphs(sentence, stem=True) # 토큰화
    stopwords_removed_sentence = [word for word in tokenized_sentence if word not in stopwords] # 불용어 제거
    tokenized_data.append(stopwords_removed_sentence)

model = Word2Vec(sentences = tokenized_data, vector_size= 100, window = 5, min_count = 5, workers = 4, sg = 1)

print(model.wv.vectors.shape)

words = model.wv.index_to_key
vectors = model.wv.vectors

count = 0

for model_word, model_vector in zip(words, vectors):
    word = model_word
    vector_data = np.array(model_vector, dtype=np.float64).tobytes()
    sql = f"INSERT INTO {table_name} (word, vector_data) VALUES (%s, %s)"
    # 쿼리 실행
    val = (word, vector_data)
    cursor.execute(sql, val)
    count += 1
# 변경사항 커밋
connection.commit()

# 삽입된 데이터 확인
print(count, "record inserted.")
cursor.close()
connection.close()

