import asyncio
import re

import pymysql as pymysql
from django.db import connections
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import User, HangulModel  # User 모델 불러오기
from .serializers import UserSerializer, HangulModelSerializer

import numpy as np
from gensim.models import KeyedVectors
from konlpy.tag import Okt

import nltk
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag



# Create your views here.
class KeywordList(APIView):

    # async def async_hangul_model(self):
    #     # MySQL 연결 설정
    #     mydb = connections['default']
    #
    #     # MySQL 커서 생성
    #     cursor = mydb.cursor()
    #
    #     table_name = "hangul_model"
    #
    #     # BLOB 타입으로 저장된 벡터 배열 읽어오기
    #     cursor.execute(f"SELECT word, vector_data FROM {table_name}")
    #
    #     # 결과 처리
    #     words = []
    #     vectors = []
    #     for row in cursor:
    #         # word는 문자열, blob_data는 bytes 타입
    #         # bytes 타입의 blob_data를 numpy 배열로 변환
    #         words.append(row[0])
    #         vectors.append(np.frombuffer(row[1], dtype=np.float64))
    #
    #     cursor.close()
    #
    #     kv = KeyedVectors(100)
    #     kv.add_vectors(words, vectors)
    #     result = kv.most_similar_cosmul('동작')
    #
    #     mydb.close()
    #
    #     return result


    def get(self, keyword):
        # user = UserSerializer(User.objects.get(id=1))
        # print(user.data.get("id"))
        # print(word)

        # charset = "utf8mb4"
        # cursorclass = pymysql.cursors.Cursor
        #
        # mydb = pymysql.connect(
        #     host="localhost",
        #     user="ssafy",
        #     password="ssafy",
        #     database="hwilyric",
        #     charset=charset,
        #     cursorclass=cursorclass
        # )
        #
        # # MySQL 커서 생성
        # cursor = mydb.cursor()
        #
        # table_name = "hangul_model"
        #
        # # BLOB 타입으로 저장된 벡터 배열 읽어오기
        # cursor.execute(f"SELECT word, vector_data FROM {table_name}")
        #
        #
        # queryset = HangulModel.objects.all()
        # serializer = HangulModelSerializer(queryset, many=True)
        # #
        # ko_words = []
        # ko_vectors = []
        #
        # for row in serializer.data:
        #     ko_words.append(row[0])
        #     ko_vectors.append(np.frombuffer(row[1], dtype=np.float64))

        # queryset_user = User.objects.all()
        # serial = UserSerializer(queryset_user, many=True)
        # test = JSONRenderer().render(serial.data)
        # print(test)

        # queryset = HangulModel.objects.all()
        # serializer = HangulModelSerializer(queryset, many=True)
        # print(serializer.data)

        # words = [item['word'] for item in serializer.data]
        # vectors = [item['vector_data'] for item in serializer.data]
        #
        # # cursor.close()
        # # mydb.close()
        # kv = KeyedVectors(100)
        # kv.add_vectors(words, vectors)


        # # 한글 형태소 분석기
        okt = Okt()

        # 입력한 단어 중 명사만 리스트로 반환
        print(okt.nouns(keyword))

        # 명사, 형용사, 서술어인 한글만 담기
        ko_temp=[]
        ko_token=okt.pos(keyword, stem=True) # 형태소 분석

        # ko_token 형태 예시 : [('단어1', 'Adjective'), ('단어2', 'Noun'), ('단어3', 'Noun'), ('단어4', 'Verb')]
        for ko_word in ko_token:
            if(ko_word[1] in ["Adjective", "Noun", "Verb"]): # 형용사, 명사, 동사인 것만 고른다.
                ko_temp.append(ko_word[0])

        # # 영어 불용어
        # # eng_stop_words = set(stopwords.words('english'))
        # # 어절 단위로 자르기
        # eng_tokens = word_tokenize(keyword)
        #
        # # 영어 불용어 제거 후 영어만 담기
        # eng_words = []
        # for eng_word in eng_tokens:
        #     # if eng_word not in eng_stop_words:
        #     if re.sub(r"[^a-zA-Z]", "", eng_word):
        #         eng_words.append(eng_word)
        #
        # # 명사, 형용사, 동사만 담기
        # eng_temp=[]
        # for eng in pos_tag(eng_words):
        #     if eng[1].startswith('N' or 'V' or 'J'):
        #         eng_temp.append(eng[0].lower())
        #
        # print(ko_temp)
        # print(eng_temp)
        # print(kv.most_similar("비"))
        ans = {"message":keyword}
        # kor_str = re.sub(r"[^가-힣]", "", word) # 자음, 모음, 공백이 제거된 한글
        # eng_str = re.sub(r"[^a-zA-Z]", "", word) # 공백 제거된 영어

        # print(kor_str)
        # print(eng_str)

        # loop = asyncio.get_event_loop()
        # result = loop.run_until_complete(self.async_hangul_model())
        # print(result)
        return JsonResponse(ans, status=200)