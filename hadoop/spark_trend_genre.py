import findspark
findspark.init()

import pyspark
import pymysql
from pyspark.sql.functions import count, col, round
from pyspark.sql import SparkSession


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

f_log = open("log_spark_trend_genre.txt","a", encoding="utf8")

connection = pymysql.connect(host=host, user=user, password=password, database=database, charset=charset, cursorclass=cursorclass)

cursor = connection.cursor()

START_YEAR = 1963

for year_id in range(1, 60):
    data = []
    # 각 년도 노래 불러오기
    year = START_YEAR + year_id
    sql = f"SELECT `genre` FROM music WHERE `chart_year` = {year}"
    
    cursor.execute(sql)

    # 각 장르들을 불러와 ,로 나누어 리스트로 만든다. [genre, genre, genre, ...]
    for each_genre in cursor.fetchall():
        data += each_genre[0].split(",")

    

    # 데이터프레임으로 만들기 위해 각 장르 튜플화
    # 만약 의미 없는 문자열이면 무시하고, 의미있는 문자열이라도 앞뒤의 여백 제거
    # [(genre,), (genre,), ...]
    data_tuples = [(value.strip(),) for value in data if value.strip()]


    # 스파크 세션 실행
    spark = SparkSession.builder.appName("Word Count").getOrCreate()

    # 데이터 프레임 생성
    df = spark.createDataFrame(data_tuples, ["genre"])

    # 전체 장르 숫자 계산
    total_count = df.count()

    # 각 장르별 그룹화하여 숫자를 계산
    genre_count = df.groupBy("genre").agg(count("*").alias("count"))


    # 각 장르 숫자를 전체 장르 숫자로 나누는 칼럼을 추가
    genre_count = genre_count.withColumn("ratio", round(col("count") / total_count, 2)).orderBy("ratio", ascending=False)

    # SQL에 입력
    sql2 = "INSERT INTO trend_genre (`trend_id`, `name`, `ratio`) VALUES "
    sql2_plus = ''

    # 모든 행을 돌며 차례로 값을 sQL문으로 만들어낸다.
    for each_data in genre_count.collect():
        sql2_plus += f"({year_id}, \'{each_data['genre']}\', {each_data['ratio']}), "
    
    f_log.write(sql2 + sql2_plus.rstrip(", ") + '\n')
    cursor.execute(sql2 + sql2_plus.rstrip(", "))

    connection.commit()

connection.close()

f_log.close()
