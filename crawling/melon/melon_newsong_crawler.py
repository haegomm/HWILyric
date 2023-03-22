from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup as bs
import pandas as pd 
from collections import OrderedDict
import time
import csv
import traceback
from datetime import datetime, timedelta

time_to_wait = 10
time_to_sleep = 4
TIMEDELTA = 2
TODAY = datetime.today().strftime("%Y.%m.%d")
TARGET_DATE = (datetime.today() - timedelta(TIMEDELTA)).strftime("%Y.%m.%d")
BASE_URL = 'https://www.melon.com/new/index.htm'
DETAIL_URL = 'https://www.melon.com/song/detail.htm?songId='
BASE_TERM = 50
order_num = 0



driver = webdriver.Chrome('C:/Users/SSAFY/Desktop/semester2/crawling/chromedriver.exe')


# 한 페이지의 노래를 전부 받아올 리스트 초기화
musics_list = [['title', 'artist', 'album', 'release_date', 'genre', 'rank', 'chart_year']]
lyrics_list = [['lyrics']]
is_end = False

while (not is_end):
    try:
        # 최신 곡 차트 찾아 들어가기
        # order_num은 숫자를 50씩 증가시키기 위한 것
        url = BASE_URL + '#params%5BareaFlg%5D=I&po=pageObj&startIndex=' + str(order_num * BASE_TERM + 1)
        driver.get(url)
        driver.implicitly_wait(time_to_wait)
        time.sleep(time_to_sleep)

        # 로드한 페이지 소스를 전부 불러와서 뷰티풀수프로 파싱
        html = driver.page_source
        soup = bs(html, 'html.parser')

        songlist_soup = soup.select('tbody > tr')

        length = len(songlist_soup)

        for i in range(length):
            song_num = songlist_soup[i].select('td')[3].select_one('div.wrap > a')['href'].split('\'')[1]
            title = songlist_soup[i].select_one('div.wrap_song_info > div.ellipsis > span > a').get_text()
            url = DETAIL_URL + song_num
            driver.get(url)
            driver.implicitly_wait(time_to_wait)
            time.sleep(time_to_sleep)
            html = driver.page_source
            song_soup = bs(html, 'html.parser')
            artist = song_soup.select_one('div.info > div.artist > a > span').get_text()
            meta_data = song_soup.select('div.meta > dl.list > dd')
            album = meta_data[0].select_one('a').get_text()
            release_date = meta_data[1].get_text()
            if (release_date == TARGET_DATE):
                is_end = True
                break
            genre = meta_data[2].get_text()
            rank = 'NULL'
            chart_year = 'NULL'
            try:
                lyrics = song_soup.select_one('#d_video_summary').get_text('\n').strip('\n\t').split('\n')
            except:
                lyrics = ['가사 정보 없음']
            musics_list.append([title, artist, album, release_date, genre, rank, chart_year])
            lyrics_list.append(lyrics)
        

        order_num += 1
    except Exception as e:
        print("예외 : ", e)
        traceback.print_exc()
        is_end = True
        break


f_musics = open("musics_newly.csv", "w", encoding="utf8")
writer = csv.writer(f_musics)
writer.writerows(musics_list)
f_musics.close()


f_lyrics = open("lyrics_newly.csv", "w", encoding="utf8")
writer = csv.writer(f_lyrics)
writer.writerows(lyrics_list)
f_lyrics.close()
