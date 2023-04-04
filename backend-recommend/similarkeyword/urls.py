from django.urls import path

from . import views
from .views import KeywordList

app_name='similarkeyword'
urlpatterns = [
    path('keywords/similarity/<str:word>', KeywordList.get)
]