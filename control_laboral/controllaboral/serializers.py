from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.HyperlinkedRelatedField(
        many=False, view_name="question-detail", read_only=True
    )

    class Meta:
        model = Employee
        fields = ["name", "nif", "date_birth", "email"]
