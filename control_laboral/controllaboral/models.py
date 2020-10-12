from django.db import models


class User(models.Model):
    username = models.CharField(max_length=64)
    password = models.CharField(max_length=64)

    def __str__(self):
        return self.username

class Employee(models.Model):
    name = models.CharField(max_length=128)
    nif = models.CharField(max_length=9)
    date_birth = models.DateField()
    email = models.EmailField(max_length=254, null=True)
    """
    contract_start_date = models.DateField()
    department = models.CharField(max_length=128, null=True)
    """

    def __str__(self):
        return self.name

class Holiday(models.Model):
    name = models.CharField(max_length=128)
    date = models.DateField()

    def __str__(self):
        return self.name