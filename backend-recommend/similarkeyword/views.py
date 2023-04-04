from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import User #User 모델 불러오기
from .serializers import UserSerializer

# import numpy as np
# import pymysql
# from gensim.models import KeyedVectors


# Create your views here.
class KeywordList(APIView):

    def get(self, word):
        user = UserSerializer(User.objects.get(id=1))
        print(user.data.get("id"))
        print(word)
        ans = {"message":user.data}
        return JsonResponse(ans, status=200)