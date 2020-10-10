import factory
from controllaboral import models


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.User
        django_get_or_create = ("username",)

    username = "fake_username"
    password = "fake_password"