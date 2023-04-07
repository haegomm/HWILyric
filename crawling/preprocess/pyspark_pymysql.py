from pyspark.sql import SparkSession
from pyspark.sql.functions import split, explode, count
from pyspark.sql import Row
import pymysql
from pprint import pprint
from pandas import Series, DataFrame
from pyspark.sql.functions import length
from IPython.display import display

from pyspark.sql.types import StructType, StructField, StringType, IntegerType



data = []

connection = pymysql.connect(host='j8b107.p.ssafy.io',
                             user='root',
                             password='hwilYRIC107',
                             database='hwilyric',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.Cursor)

with connection:
    # with connection.cursor() as cursor:
    #     # Create a new record
    #     sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
    #     cursor.execute(sql, ('webmaster@python.org', 'very-secret'))

    # # connection is not autocommit by default. So you must commit to save
    # # your changes.
    # connection.commit()

    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT `lyrics` FROM `music` WHERE `genre`='발라드'"
        cursor.execute(sql)
        result_str = ''
        # textf = open('textfile.txt','w', encoding='utf8')
        for each_lyric in cursor.fetchall():
            # for line in each_lyric[0].split(','):
                # textf.write(line + '\n')
            data += each_lyric[0].split(',')
        # textf.close()
        pprint(data)



# SparkSession 생성
spark = SparkSession.builder \
    .appName("Word Count") \
    .getOrCreate()

# # 텍스트 파일 로드
# text_file = "./textfile.txt"
# df = spark.read.text(text_file)

# df.show()

# rows = [Row(value=value) for value in data]
# df = spark.createDataFrame(rows)

# pdf = DataFrame({'value' : data})
# df = spark.createDataFrame(pdf)


# data = ['111', '222', '333']

# print(1)

# rdd = spark.sparkContext.parallelize(data)

# print(2)
# print(rdd)

data_tuples = [(value,) for value in data if value.strip()]


# schema = StructType([
#     StructField("value", StringType(), True),
#     # StructField("age", IntegerType(), True)
# ])

schema = StructType([
    StructField("value", StringType(), True)
])


# df = spark.createDataFrame(data_tuples, schema=schema)

df = spark.createDataFrame(data_tuples, ["value"])

# df.show()


# print(3)

# print(data)

# 줄을 단어로 분리하고 단어 수 세기
words = df.select(explode(split(df.value, " ")).alias("word"))
word_count = words.where(length("word") >= 3).groupBy("word").agg(count("*").alias("count")).orderBy("count", ascending=False)

# word_count = (
#     words.where(length("word") >= 2)  # 또는 words.filter(length("word") >= 2)
#     .groupBy("word")
#     .agg(count("*").alias("count"))
#     .orderBy("count", ascending=False)
# )

# 결과 출력
word_count.show(n=30, truncate=False)

# output_path = "./dd/"
# word_count.write.csv(output_path, mode="overwrite", header=True)

# result_pdf = word_count.select("*").toPandas()

# ddff = spark.createDataFrame(result_pdf)

# display(result_pdf)