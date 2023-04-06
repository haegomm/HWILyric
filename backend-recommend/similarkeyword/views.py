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


class KeywordList(APIView):


    def get(self, keyword):

        word_temp=[]

        # 영어를 입력한 경우
        if keyword.encode().isalpha():
            return JsonResponse({"message": "한글로 입력해주세요."}, status=404)

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


            okt = Okt()

            ko_token=okt.pos(keyword, stem=True)


            for ko_word in ko_token:
                if(ko_word[1] in ["Adjective", "Noun", "Verb"]):
                    word_temp.append(ko_word[0])

        try:
            if len(word_temp)>0 :
                similar_list = kv.most_similar(word_temp[0])
            else:
                return JsonResponse({"message" : "형용사 or 명사 or 동사만 입력해주세요."}, status=400)
        except KeyError:
            return JsonResponse({"message" : "유사한 키워드가 없습니다."}, status=404)
        answer = []
        for word in similar_list:
            answer.append(word[0])

        results = json.dumps(answer)
        return HttpResponse(results,  content_type="application/json")
