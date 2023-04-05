import json

import nltk
import numpy as np
from django.http import JsonResponse, HttpResponse
from gensim.models import KeyedVectors
from konlpy.tag import Okt
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView

from .models import HangulModel
from .serializers import HangulModelSerializer

nltk.download('stopwords')
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')


# Create your views here.
class KeywordList(APIView):


    def get(self, keyword):

        word_temp=[]

        # 영어를 입력한 경우
        if keyword.encode().isalpha():
            return JsonResponse({"message": "한글로 입력해주세요."}, status=404)
            # queryset = EnglishModel.objects.all()
            # serializer = HangulModelSerializer(queryset, many=True)
            # json_render = JSONRenderer().render(serializer.data)
            # json_data = json.loads(json_render.decode('utf-8'))
            #
            # ewords = []
            # evectors = []
            # for word in json_data:
            #     ewords.append(word['word'])
            #     vector_bytes_str = str(word['vector_data'])
            #     vector_bytes_str_enc = vector_bytes_str.encode()
            #     bytes_np_dec = vector_bytes_str_enc.decode('unicode-escape').encode('ISO-8859-1')[2:-1]
            #     evectors.append(np.frombuffer(bytes_np_dec, dtype=np.float64))
            #
            # kv = KeyedVectors(100)
            # kv.add_vectors(ewords, evectors)
            #
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
            # for eng in pos_tag(eng_words):
            #     if eng[1].startswith('N' or 'V' or 'J'):
            #         word_temp.append(eng[0].lower())

        # 한글을 입력한 경우
        else:
            queryset = HangulModel.objects.all()
            serializer = HangulModelSerializer(queryset, many=True)
            json_render = JSONRenderer().render(serializer.data)
            json_data = json.loads(json_render.decode('utf-8'))

            kwords=[]
            kvectors=[]
            for word in json_data:
                kwords.append(word['word'])
                vector_bytes_str = str(word['vector_data'])
                vector_bytes_str_enc = vector_bytes_str.encode()
                bytes_np_dec = vector_bytes_str_enc.decode('unicode-escape').encode('ISO-8859-1')[2:-1]
                kvectors.append(np.frombuffer(bytes_np_dec, dtype=np.float64))

            kv = KeyedVectors(100)
            kv.add_vectors(kwords, kvectors)


            # 한글 형태소 분석기
            okt = Okt()

            # 명사, 형용사, 서술어인 한글만 담기
            ko_token=okt.pos(keyword, stem=True) # 형태소 분석

            # ko_token 형태 예시 : [('단어1', 'Adjective'), ('단어2', 'Noun'), ('단어3', 'Noun'), ('단어4', 'Verb')]
            for ko_word in ko_token:
                if(ko_word[1] in ["Adjective", "Noun", "Verb"]): # 형용사, 명사, 동사인 것만 고른다.
                    word_temp.append(ko_word[0])

        try:
            list = kv.most_similar(word_temp[0])
        except KeyError:
            return JsonResponse({"message": "일치하는 키워드가 없습니다."}, status=404)
        answer = []
        for word in list:
            answer.append(word[0])

        results = json.dumps(answer)
        return HttpResponse(results,  content_type="application/json")
