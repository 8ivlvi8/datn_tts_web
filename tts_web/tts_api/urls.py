from django.urls import path
from . import views

urlpatterns = [
    path('tts_api/', views.TTS_API_List.as_view()),
    path('tts_api/<int:pk>/', views.TTS_API_Detail.as_view()),
]
