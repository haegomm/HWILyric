import findspark
findspark.init()

import pyspark

from pyspark.sql import SparkSession
from pyspark.sql.functions import split, explode, count, length
import pymysql

data = []

# DB에 접근하기 위한 사전정보
# cursorclass 설정에 따라 불러온 정보를 다양한 형태로 반환해줌
# Cursor의 경우는 tuple로 반환
connection = pymysql.connect(host="j8b107.p.ssafy.io", user="root", password="hwilYRIC107", database="hwilyric", charset="utf8mb4", cursorclass=pymysql.cursors.Cursor)



with connection:
    with connection.cursor() as cursor:
        sql = "SELECT `lyrics` FROM `music` WHERE `genre`='발라드'"
        # SQL문 실행
        cursor.execute(sql)
        # fetchall()은 받아온 모든 행의 튜플을 다시 튜플로 감싸서 한꺼번에 반환함
        # fetchone()은 하나의 행을 튜플 하나로 반환하며, 호출할때마다 차례차례 한 행씩 반환함
        # fetchmany(n)는 n개의 숫자만큼 반환함
        for each_lyric in cursor.fetchall():
            data += each_lyric[0].split(',')

# 스파크 세션 실행
spark = SparkSession.builder.appName("Word Count").getOrCreate()

# 데이터프레임으로 만들 수 있도록 각 요소들을 튜플로 감싸서 하나의 행임을 스파크에게 알려준다.
data_tuples = [(value,) for value in data if value.strip()]

# 만들 칼럼을 리스트로 정의해준다.
df = spark.createDataFrame(data_tuples, ["value"])

# value들을 공백문자들로 나누어 단어화한다.
# explode는 주어진 배열 및 맵의 각 요소에 대해 새로운 행을 반환하고 기본 컬럼 이름을 col로 정한다.
# alias를 통해 이 col을 word로 바꾼다.
words = df.select(explode(split(df.value, " ")).alias("word"))

# 길이 3 이상의 단어들을 세어서 많은 순서대로 배열
word_count = words.where(length("word") >= 3).groupBy("word").agg(count("*").alias("count")).orderBy("count", ascending=False)


word_count.show(n=100, truncate=False)