from django.test import TestCase
from controllaboral.models import User, Employee, Holiday
from controllaboral.factories import UserFactory, EmployeeFactory, HolidayFactory


class UserTestCase(TestCase):
    def setUp(self):
        UserFactory()

    def test_string_representation(self):
        fake_username = User.objects.get(username="fake_username")
        self.assertEqual(str(fake_username), "fake_username")


class EmployeeTestCase(TestCase):
    def setUp(self):
        EmployeeFactory()

    def test_string_representation(self):
        fake_employee_name = Employee.objects.get(name="fake_employee_name")
        self.assertEqual(str(fake_employee_name), "fake_employee_name")


class HolidayTestCase(TestCase):
    def setUp(self):
        HolidayFactory()

    def test_string_representation(self):
        fake_holiday_name = Holiday.objects.get(name="fake_holiday_name")
        self.assertEqual(str(fake_holiday_name), "fake_holiday_name")