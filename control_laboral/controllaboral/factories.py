import factory
from controllaboral import models


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.User
        django_get_or_create = ("username",)

    username = "fake_username"
    password = "fake_password"

class EmployeeFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.Employee
        django_get_or_create = ("name",)

    name = "fake_employee_name"
    nif = "fake_employee_nif"
    date_birth = "1969-04-20"
    email = "fake_employee_email"
    """
    contract = "1984-01-01"
    department = "IT"
    """

class HolidayFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.Holiday
        django_get_or_create = ("name",)

    name = "fake_holiday_name"
    date = "1969-04-20"