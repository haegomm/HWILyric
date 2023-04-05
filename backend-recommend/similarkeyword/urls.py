from django.urls import path

from .views import KeywordList

app_name='similarkeyword'
urlpatterns = [
    path('keywords/similarity/<str:keyword>', KeywordList.get)
]