from django.urls import path
from . import views

urlpatterns = [
    path('tts_api/getaudiostream/', views.TTS_API_Get_Audio_Stream.as_view()),
    path('tts_api/getlistchapters/', views.TTS_API_Get_List_Chapter.as_view()),
    path('tts_api/getaudioplayer/', views.TTS_API_Get_Audio_Player.as_view()),
]
