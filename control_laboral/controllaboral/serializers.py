from rest_framework import serializers
from .models import User, Employee, Holiday


class UserSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.HyperlinkedRelatedField(
        many=False, view_name="user-detail", read_only=True
    )

    class Meta:
        model = User
        fields = "__all__"


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.HyperlinkedRelatedField(
        many=False, view_name="employee-detail", read_only=True
    )

    class Meta:
        model = Employee
        # fields = ["name", "nif", "date_birth", "email"]
        fields = "__all__"


class HolidaySerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.HyperlinkedRelatedField(
        many=False, view_name="holiday-detail", read_only=True
    )

    class Meta:
        model = Holiday
        fields = "__all__"
