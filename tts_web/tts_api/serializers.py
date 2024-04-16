from rest_framework import serializers

class TextToSpeechInputSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=255)

class TextToSpeechOutputSerializer(serializers.Serializer):
    audio_url = serializers.URLField()