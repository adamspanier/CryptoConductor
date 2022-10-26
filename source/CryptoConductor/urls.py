from django.contrib import admin
from django.urls import path
from django.urls import include
from rest_framework import routers
from API import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', views.index, name="index")
]
