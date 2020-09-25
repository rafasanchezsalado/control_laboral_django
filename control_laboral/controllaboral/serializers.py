from rest_framework import serializers
from .models import *


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.HyperlinkedRelatedField(
        many=False, view_name="employee-detail", read_only=True
    )

    class Meta:
        model = Employee
        # fields = ["name", "nif", "date_birth", "email"]
        fields = '__all__'