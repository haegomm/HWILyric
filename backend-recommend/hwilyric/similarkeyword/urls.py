from django.urls import path

from . import views
from .views import KeywordList

app_name='similarkeyword'
urlpatterns = [
    path('similarity/<str:word>', KeywordList.get)
]