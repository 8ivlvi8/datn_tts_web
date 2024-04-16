from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('text-to-speech', views.TextToSpeechViewSet, basename='text-to-speech')

urlpatterns = [
    path('', include(router.urls)),
]