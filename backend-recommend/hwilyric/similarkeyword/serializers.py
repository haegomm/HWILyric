from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' # 모델 User의 모든 field를 serialize 함.

# class ModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Model
#         fields = '__all__'
