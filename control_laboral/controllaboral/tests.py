from django.test import TestCase
from controllaboral.models import User


class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="rafa", password="rafa")

    def test_string_representation(self):
        rafa = User.objects.get(username="rafa")
        self.assertEqual(str(rafa), "rafa")