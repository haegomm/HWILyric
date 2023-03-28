from datetime import datetime, timedelta
import pymysql

f_conn = open("")

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

#DB연결 connection 생성
connection = pymysql.connect(host=host, user=user, password=password, database=database, charset=charset, cursorclass=cursorclass)

cursor = connection.cursor()

#목표 날짜 설6
TIMEDELTA = 7
TODAY = datetime.today().strftime("%Y-%m-%d")
TARGET_DATE = (datetime.today() - timedelta(TIMEDELTA)).strftime("%Y-%m-%d")

print(TODAY)
print(TARGET_DATE)

#일단 music 테이블에서 데이터 다 긁어오기
#나중에 주기별로 반복할 때는 여기에 날짜로 WHERE 조건 걸어주기
selectSql = f"SELECT * FROM music where created_date between '{TARGET_DATE}' and '{TODAY}'"
cursor.execute(selectSql)
result = cursor.fetchall()
# [][1]: title / [][2]: artist / [][3]: lyric

for x in result:
    insertSql = "INSERT INTO music_line (title, artist, lyric) VALUES (%s, %s, %s)"
    lyricLine = x[3].split(',')
    for ll in lyricLine:
        data = (x[1], x[2], ll)
        cursor.execute(insertSql, data)
        connection.commit()

connection.close()


