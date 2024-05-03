from django.urls import path
from . import views

urlpatterns = [
    path('nghetruyen/', views.TTS_APT_Get_html.as_view()),
    path('', views.tts, name='tts'),
    path('tts/', views.tts, name='tts'),
]