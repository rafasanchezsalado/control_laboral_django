from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views import generic
from django.urls import reverse

from rest_framework import viewsets
from .models import User, Employee, Holiday
from . import serializers


def index(request):
    return HttpResponse("Welcome to Control Laboral!")


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()


class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EmployeeSerializer
    queryset = Employee.objects.all()


class HolidayViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.HolidaySerializer
    queryset = Holiday.objects.all()
