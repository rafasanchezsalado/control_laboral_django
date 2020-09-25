from django.urls import path

from . import views

app_name = "controllaboral"
urlpatterns = [
    path("", views.index, name="index"),
]