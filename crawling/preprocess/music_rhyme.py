import re
import pymysql

def decomposition(word):
    sp_list = list(word)

    result = []
    for keyword in sp_list:
        char_code = ord(keyword) - BASE_CODE
        char1 = int(char_code / CHOSUNG)
        result.append(CHOSUNG_LIST[char1])

        char2 = int((char_code - (CHOSUNG * char1)) / JUNGSUNG)
        result.append(JUNGSUNG_LIST[char2])

        char3 = int((char_code - (CHOSUNG * char1) - (JUNGSUNG * char2)))
        result.append(JONGSUNG_LIST[char3])

    return result[-2]

BASE_CODE, CHOSUNG, JUNGSUNG = 44032, 588, 28

CHOSUNG_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
JUNGSUNG_LIST = ['ㅏ', 'ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ']
JONGSUNG_LIST = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']


db = pymysql.connect(
    host='j8b107.p.ssafy.io',
    port=3306,
    user='root',
    passwd='hwilYRIC107',
    db='hwilyric',
    charset='utf8mb4'
)

cursor = db.cursor()

sql = 'SELECT lyrics FROM music'
cursor.execute(sql)
results = cursor.fetchall()


for result in results:
    for lyric in result:
        if lyric == '가사 정보 없음':
            continue
        segments_list = list(re.split('[ ,]', lyric))

        for segment in segments_list:
            segment = re.sub('~', '', segment)
            if segment != '':
                if re.compile('[가-힣]+').findall(segment) != [] and segment == re.compile('[가-힣]+').findall(segment)[0]:
                    jungseoung = decomposition(segment)
                    is_hangul = True
                elif re.compile('[a-zA-Z]+').findall(segment) != [] and segment == re.compile('[a-zA-Z]+').findall(segment)[0]:
                    jungseoung = ''
                    is_hangul = False
                else:
                    continue

                insert_sql = f'INSERT IGNORE INTO music_rhyme(`segment`, `is_hangul`, `jungseong`) VALUES ("{segment}", {is_hangul}, "{jungseoung}")'
                cursor.execute(insert_sql)
                db.commit()

db.close()