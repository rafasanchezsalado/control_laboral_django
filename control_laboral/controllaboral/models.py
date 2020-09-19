from django.db import models


class Employee(models.Model):
    name = models.CharField(max_length=100)
    nif = models.CharField(max_length=9)
    date_birth = models.DateField()
