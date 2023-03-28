import findspark
findspark.init()

import pyspark

from pyspark.sql import SparkSession
from pyspark.sql.functions import split, explode, count, length
import pymysql

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

connection = pymysql.connect(host=host, user=user, password=password, database=database, charset=charset, cursorclass=cursorclass)


cursor = connection.cursor()
years = 1963

f_log = open('log_spark_trend_keyword.txt', "a", encoding="utf8")

for year_id in range(1, 60):
    data = []
    years += 1
    start_date = str(years) + '-01-01'
    end_date = str(years) + '-12-31'

    sql = f"SELECT `lyrics` FROM `music` WHERE `released_date` >='{start_date}' AND `released_date` <='{end_date}'"
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

    
    sql2 = "INSERT INTO trend_keyword (trend_id, `word`, `count`) VALUES "

    sql_cnt = 0
    sql2_plus = ''
    for each_data in word_count.collect():
        sql2_plus += "(" + str(year_id) + ", "
        sql2_plus += "\"" + each_data["word"] + "\", "
        sql2_plus += str(each_data["count"])
        sql2_plus += "), "
        sql_cnt += 1
        if (sql_cnt == 100):
            f_log.write(sql2 + sql2_plus.rstrip(', ')+'\n\n\n')
            cursor.execute(sql2 + sql2_plus.rstrip(', '))
            sql_cnt = 0
            sql2_plus = ''

    if (sql2_plus != ''):
        f_log.write(sql2 + sql2_plus.rstrip(', ')+'\n\n\n')
        cursor.execute(sql2 + sql2_plus.rstrip(', '))

    connection.commit()

connection.close()

f_log.close()