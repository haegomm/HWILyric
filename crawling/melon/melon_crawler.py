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

year_num = 1964
time_to_wait = 10
time_to_sleep = 4
total_song_list = []

driver = webdriver.Chrome('C:/Users/SSAFY/Desktop/semester2/crawling/chromedriver.exe')

while (year_num <= 2022):
    try:
        song_list = []
        year = str(year_num)
        url = 'https://www.melon.com/chart/age/index.htm?chartType=YE&chartGenre=KPOP&chartDate=' + year +'#params%5Bidx%5D=1'
        driver.get(url)
        driver.implicitly_wait(time_to_wait)
        time.sleep(time_to_sleep)

        # # 셀레니움으로 일간 페이지까지 찾아 들어가기
        # driver.find_element_by_xpath('//*[@id="gnb_menu"]/ul[1]/li[1]/a/span[2]').click()
        # time.sleep(2)

        # driver.find_element_by_xpath('//*[@id="gnb_menu"]/ul[1]/li[1]/div/ul/li[2]/a/span').click()
        # time.sleep(2)

        # 해당 페이지 사용. bs를 활용
        html = driver.page_source
        soup = bs(html, 'html.parser')
        song_soup = soup.select('tbody > tr.lst50 > td.t_left > div.wrap > div.wrap_song_info > div.ellipsis > span')
        number_soup = soup.select('tbody > tr.lst50 > td.t_left > div.wrap > a')

        length = len(song_soup)
        ranking = 1
        for idx in range(length):
            song = song_soup[idx].select_one('a')
            if(song == None):
                song = song_soup[idx].select_one('div.ellipsis')
            rank = ranking
            title = song.get_text().strip()
            number = number_soup[idx]['onclick'].split('\'')[1]
            song_list.append({'number': number, 'title': title, 'rank': rank})
            ranking += 1


        song_soup = soup.select('tbody > tr.lst100 > td.t_left > div.wrap > div.wrap_song_info > div.ellipsis > span')
        number_soup = soup.select('tbody > tr.lst100 > td.t_left > div.wrap > a')

        length = len(song_soup)
        for idx in range(length):
            song = song_soup[idx].select_one('a')
            if(song == None):
                song = song_soup[idx].select_one('div.ellipsis')
            rank = ranking
            title = song.get_text().strip()
            number = number_soup[idx]['onclick'].split('\'')[1]
            song_list.append({'number': number, 'title': title, 'rank': rank})
            ranking += 1



        # https://www.melon.com/song/detail.htm?songId=5394265

        # - 고유키 (id) not null auto_increment
        # - 가수 (artist) not null
        # - 앨범명 (album) not null
        # - 제목 (title) not null
        # - 가사 (lyrics**)** not null
        # - 장르 (genre) not null
        # - 순위 (rank)
        # - 발매일 (released_date) not null


        time.sleep(time_to_sleep)
        length = len(song_list)
        for idx in range(length):
            url = 'https://www.melon.com/song/detail.htm?songId=' + song_list[idx]['number']
            driver.get(url)
            driver.implicitly_wait(time_to_wait)
            html = driver.page_source
            soup = bs(html, 'html.parser')
            artist_exist = soup.select_one('div.entry > div.info > div.artist > a')
            artist = artist_exist['title'] if artist_exist else soup.select_one('div.entry > div.info > div.artist').get_text()
            album = soup.select_one('div.entry > div.meta > dl.list > dd > a').get_text()
            meta = soup.select('div.entry > div.meta > dl.list > dd')
            release_date = meta[1].get_text() if year_num >= 2000 else year_num
            genre = meta[2].get_text()
            chartyear = year_num
            try:
                lyrics = soup.select_one('#d_video_summary').get_text('\n').strip('\n\t').split('\n')
            except Exception as e:
                lyrics = ['가사 정보 없음']
            song_list[idx].update({'artist':artist, 'album':album, 'release_date':release_date,'genre': genre, 'lyrics':lyrics, 'chartyear':chartyear})

            print(f"======== {year}년 {song_list[idx]['rank']}위 곡 ========")
            print(f"곡 번호 : {song_list[idx]['number']}")
            print(f"곡명 : {song_list[idx]['title']}")
            print(f"아티스트 : {artist}")
            print(f"앨범 : {album}")
            print(f"장르 : {genre}")
            print(f"발매일 : {release_date}")
            print(f"가사 : \n{lyrics[0]}\n...")
            print("\n\n")

            time.sleep(time_to_sleep)

        year_num += 1
        time.sleep(time_to_sleep)
        total_song_list += song_list
        # print(song_list, ranking)

    except Exception as e:
        print("예외 : ", e)
        traceback.print_exc()
        break

driver.quit()

csv_col = ['title', 'artist', 'album', 'release_date', 'genre', 'rank', 'chartyear']
data_csv = [csv_col]
lyrics_csv = [['lyrics']]

for song in total_song_list:
    song_csv = []
    for col in csv_col:
        song_csv.append(song[col])
    data_csv.append(song_csv)
    lyrics_csv.append(song['lyrics'])


f = open("musics_new.csv", "w", encoding="utf8")
writer = csv.writer(f)
writer.writerows(data_csv)
f.close()

f = open("lyrics_new.csv", "w", encoding="utf8")
writer = csv.writer(f)
writer.writerows(lyrics_csv)
f.close()
