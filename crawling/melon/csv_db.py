import pandas as pd
import pymysql
import traceback

f_env = open(".env")

# DB Information
host = "j8b107.p.ssafy.io"
user = f_env.readline().strip()
password = f_env.readline().strip()
database = "hwilyric"

f_env.close()

# MySQL Connection
conn = pymysql.connect(host=host, user=user, password=password, db=database, charset="utf8")
curs = conn.cursor(pymysql.cursors.DictCursor)


# DB insert
sql = 'INSERT INTO music (title,artist,album,released_date,genre,`rank`,chart_year,lyrics) VALUES '

columns = ['title','artist','album','released_date','genre','rank','chart_year']

# csv파일 경로 설정
path = "./"
musics = "musics_newly.csv"
lyrics = "lyrics_newly.csv"

# csv 파일 읽기

musics_file = pd.read_csv(path+musics, encoding="utf8")

musics_length = len(musics_file)

print(musics_length)

lyrics_file = open(path+lyrics, encoding="utf8")
lyrics_lines = lyrics_file.readlines()

values_cnt = 0
each_sql = ''
for i in range(musics_length):
    try:
        each_sql += "("
        for column in columns:
            if column == 'released_date':
                if len(musics_file[column][i]) < 5:
                    if musics_file[column][i] == '-':
                        each_sql += "\"" + str(musics_file[column][i+3]) + "-01-01" + "\""
                    else:
                        each_sql += "\"" + str(musics_file[column][i]) + "-01-01" + "\""
                else:
                    date_list = musics_file[column][i].split('.')
                    try:
                        each_sql += "\"" + date_list[0] + '-' + date_list[1] + '-' + date_list[2] + "\""
                    except:
                        each_sql += "\"" + date_list[0] + '-' + date_list[1] + '-' + "01" + "\""
            elif column == 'rank' or column == 'chart_year':
                each_sql += str(musics_file[column][i])
            else:
                each_sql += "\"" + str(musics_file[column][i]) + "\""
            each_sql += ', '
        if "\"" in lyrics_lines[2 * (i + 1)]:
            lyrics_lines[2 * (i + 1)] = lyrics_lines[2 * (i + 1)].replace("\"", "")
        each_sql += "\"" + lyrics_lines[2 * (i + 1)].strip() + "\""
        each_sql += ")"
        values_cnt += 1
        if values_cnt == 100:
            curs.execute(str(sql + each_sql))
            values_cnt = 0
            each_sql = ''
            continue
        each_sql += ", "
    except Exception as e:
        traceback.print_exc()
        print(e)
        break

if values_cnt != 0:
    curs.execute(str(sql + each_sql.rstrip(", ")))

conn.commit()
curs.close()
conn.close()