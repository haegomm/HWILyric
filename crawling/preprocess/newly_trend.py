import findspark
findspark.init()

import pyspark
import pymysql
from pyspark.sql.functions import count, col, round, split, explode, count, length
from pyspark.sql import SparkSession
import csv
from konlpy.tag import Okt

# 명사, 형용사, 서술어인 한글만 담기
def lyricOkt(sentence):
    okt = Okt()
    keyword_result=[]
    keyword_token=okt.pos(sentence, stem=True)
    for ko_word in keyword_token:
        if(ko_word[1] in ["Adjective", "Noun", "Verb"]):
            keyword_result.append(ko_word[0])
    return keyword_result


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

f_log = open("log_newly_genre.txt","a", encoding="utf8")

f_genre = open("musics_newly.csv", "r", encoding="utf8")
csv_reader = list(csv.reader(f_genre))[1:]

released_date = ""

genre_data = []

for music in csv_reader:
    if (music):
        if (not released_date and music[3] != 'released_date'):
            released_date = "-".join(music[3].split("."))
        genre_data += music[4].strip().split(",")

f_genre.close()


# 데이터프레임으로 만들기 위해 각 장르 튜플화
# 만약 의미 없는 문자열이면 무시하고, 의미있는 문자열이라도 앞뒤의 여백 제거
# [(genre,), (genre,), ...]
genre_data_tuples = [(value.strip(),) for value in genre_data if value.strip()]



f_keyword = open("lyrics_newly.csv", "r", encoding="utf8")
csv_reader = list(csv.reader(f_keyword))[1:]

keyword_data = ""
keyword_result = []
for lyric in csv_reader:
    if (lyric):
        for i in lyric:
            keyword_data += i
        keyword_result += lyricOkt(keyword_data)

f_keyword.close()

# print(okt.nouns(keyword_data))



keyword_data_tuples = [(value.strip(),) for value in keyword_result if len(value) >= 2]


# 스파크 세션 실행
spark = SparkSession.builder.appName("Word Count").getOrCreate()

# 데이터 프레임 생성
genre_df = spark.createDataFrame(genre_data_tuples, ["genre"])


# 각 장르별 그룹화하여 숫자를 계산
genre_count = genre_df.groupBy("genre").agg(count("*").alias("count"))


# 만들 칼럼을 리스트로 정의해준다.
keyword_df = spark.createDataFrame(keyword_data_tuples, ["value"])

# value들을 공백문자들로 나누어 단어화한다.
# explode는 주어진 배열 및 맵의 각 요소에 대해 새로운 행을 반환하고 기본 컬럼 이름을 col로 정한다.
# alias를 통해 이 col을 word로 바꾼다.
words = keyword_df.select(explode(split(keyword_df.value, " ")).alias("word"))

# 길이 2 이상의 단어들을 세어서 많은 순서대로 배열
word_count = words.where(length("word") >= 2).groupBy("word").agg(count("*").alias("count")).orderBy("count", ascending=False)



connection = pymysql.connect(host=host, user=user, password=password, database=database, charset=charset, cursorclass=cursorclass)

cursor = connection.cursor()




# SQL에 입력
sql2 = "INSERT INTO newly_trend (`genre`, `count`, `keywords`, `released_date`) VALUES "
sql2_plus = ''

keyword_str = ""
cnt = 0
for each_data in word_count.collect():
    keyword_str += f"{each_data['word']},"
    cnt += 1
    if cnt >= 20:
        break

keyword_str = keyword_str.rstrip(',')

# 모든 행을 돌며 차례로 값을 sQL문으로 만들어낸다.
for each_data in genre_count.collect():
    sql2_plus += f"(\"{each_data['genre']}\", {each_data['count']}, \"{keyword_str}\", \"{released_date}\"), "

print(sql2+sql2_plus)
# f_log.write(sql2 + sql2_plus.rstrip(", ") + '\n')
# cursor.execute(sql2 + sql2_plus.rstrip(", "))

# connection.commit()

connection.close()

f_log.close()