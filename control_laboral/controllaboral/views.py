from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.views import generic
from django.urls import reverse

from rest_framework import viewsets
from .models import Employee
from . import serializers


def index(request):
    return HttpResponse("Welcome to Control Laboral!")


class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EmployeeSerializer
    queryset = Employee.objects.all()