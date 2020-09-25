from django.db import models


class Employee(models.Model):
    name = models.CharField(max_length=128)
    nif = models.CharField(max_length=9)
    date_birth = models.DateField()
    email = models.EmailField(max_length=254, null=True)

    def __str__(self):
        return self.name