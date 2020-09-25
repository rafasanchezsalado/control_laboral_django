from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from controllaboral import views

router = routers.DefaultRouter()
router.register("employees", views.EmployeeViewSet)

urlpatterns = [
    path("controllaboral/", include("controllaboral.urls")),
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
