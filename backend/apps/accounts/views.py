from django.shortcuts import render
from rest_framework import generics
from .models import UserAccount
from .serializers import UserAccountSerializer

class UserAccountList(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer

class UserAccountDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer