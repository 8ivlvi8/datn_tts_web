from django.urls import path
from . import views

urlpatterns = [
    path('web/', views.web, name='web'),
    path('', views.web, name='web'),
]