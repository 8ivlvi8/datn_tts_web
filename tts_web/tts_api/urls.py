from django.urls import path
from . import views

urlpatterns = [
    path('tts_api/', views.tts_api_list),
    path('tts_api/<int:pk>/', views.tts_api_detail),
]