from django.test import TestCase
from controllaboral.models import User
from controllaboral.factories import UserFactory


class UserTestCase(TestCase):
    def setUp(self):
        UserFactory()

    def test_string_representation(self):
        fake_username = User.objects.get(username="fake_username")
        self.assertEqual(str(fake_username), "fake_username")