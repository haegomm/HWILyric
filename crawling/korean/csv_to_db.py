import os
import pandas as pd
import pymysql
import re

# DB Information
host = "j8b107.p.ssafy.io"
user = ""
password = ""
database = "hwilyric"

# MySQL Connection
conn = pymysql.connect(host=host, user=user, password=password, db=database)
curs = conn.cursor(pymysql.cursors.DictCursor)

# DB insert
sql = 'INSERT INTO keyword (word, category, is_hangul) VALUES'

# csv파일 경로 설정
path = ""
file_list = os.listdir(path)
csv_list = [file for file in file_list if file.startswith("downFile")]

value_cnt = 0
error_cnt = 0
for file in csv_list:
    try:
        df = pd.read_excel(path+"/"+file,header=1)
        for i in range(100):
            word = df["표제어"][i].rstrip(" ")
            # 예외 단어 제외 - 8자 이상 (총 25788 개)
            if (len(word)>= 8):
                continue
            # 예외 단어 제외 - 자음 또는 모음 포함 (총 7184 개)
            regex = re.compile("[ㄱ-ㅎ|ㅏ-ㅣ|`~!@#$%^&*()_|+\-=?;:'\",.<>\{\}\[\]\\\/]")
            m = regex.search(word)
            if m is not None:
                error_cnt += 1
                continue
            value = "("+"'"+word+"'"+", '랜덤', true)"
            value_cnt += 1
            sql += value
            sql += ", "
            if value_cnt == 1000:
                print(sql)
                value_cnt = 0
                sql = sql.rstrip(", ")
                curs.execute(sql)
                sql = 'INSERT INTO keyword (word, category, is_hangul) VALUES'
                continue
    except Exception as e:
        print(e)

print("예외 단어 개수: ",error_cnt)

if value_cnt != 0:
    sql = sql.rstrip(", ")
    curs.execute(sql)
conn.commit()
curs.close()
conn.close()

