from rest_framework import serializers
from .models import TextToSpeech

# Create a model serializer


class TextToSpeechSerializer(serializers.Serializer):
    class Meta:
        model = TextToSpeech
        fields = ['id', 'text', 'url', 'code']
