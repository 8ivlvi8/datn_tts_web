from django.urls import path
from . import views

urlpatterns = [
    path('tts_api/', views.TTS_API_Get_Text.as_view()),
]
