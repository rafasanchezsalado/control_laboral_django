from django.contrib import admin

from .models import User, Employee, Holiday

admin.site.register(User)
admin.site.register(Employee)
admin.site.register(Holiday)
