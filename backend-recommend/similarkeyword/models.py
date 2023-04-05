import numpy as np
from django.db import models

# Create your models here.
class User(models.Model):
    id = models.BigAutoField(primary_key=True, db_comment='PK')
    email = models.CharField(unique=True, max_length=100, db_comment='이메일(아이디)')
    password = models.CharField(max_length=100, blank=True, null=True, db_comment='비밀번호')
    nickname = models.CharField(unique=True, max_length=20, db_comment='닉네임')
    profile_img = models.CharField(max_length=200, db_comment='프로필 이미지')
    user_type = models.CharField(max_length=15, db_comment='사용자 타입(NORMAL:일반,  KAKAO:카카오톡)')
    refresh_token = models.CharField(unique=True, max_length=200, blank=True, null=True, db_comment='refresh토큰')
    created_date = models.DateTimeField(db_comment='가입일시')
    updated_date = models.DateTimeField(blank=True, null=True, db_comment='수정일시')
    role = models.CharField(max_length=15, db_comment='spring  security용 컬럼')
    is_active = models.IntegerField(db_comment='회원상태(1 : 활성화, 0 : 탈퇴)')

    class Meta:
        managed = False
        db_table = 'user'

class HangulModel(models.Model):
    word = models.CharField(max_length=255, db_comment='단어')
    vector_data = models.TextField(blank=True, null=True, db_comment='벡터데이터')

    class Meta:
        managed = False
        db_table = 'hangul_model'

class EnglishModel(models.Model):
    word = models.CharField(max_length=255, db_comment='단어')
    vector_data = models.TextField(blank=True, null=True, db_comment='벡터데이터')

    class Meta:
        managed = False
        db_table = 'english_model'