from rest_framework import serializers
from .models import User, HangulModel


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' # 모델 User의 모든 field를 serialize 함.

class HangulModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = HangulModel
        fields = ("word", "vector_data")
