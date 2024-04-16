import edge_tts
import asyncio
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets, serializers
from .serializers import TextToSpeechInputSerializer, TextToSpeechOutputSerializer
import uuid


async def tts_by_edge(text, voice, output_file):
    try:
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(output_file)
    except Exception as e:
        # Xử lý ngoại lệ, ví dụ ghi log lỗi
        print(f"Lỗi chuyển đổi văn bản thành giọng nói: {e}")


class TextToSpeechViewSet(viewsets.ModelViewSet):
    serializer_class = TextToSpeechOutputSerializer

    def get_queryset(self):
        return []

    async def create(self, request):
        serializer = TextToSpeechInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        text = serializer.data['text']
        # Giả sử bạn có trường 'voice' trong serializer
        voice = serializer.data['voice']

        # Tạo tên tệp âm thanh tạm thời
        temp_filename = f'tts_{uuid.uuid4()}.mp3'

        loop = asyncio.get_event_loop()
        audio_url = await loop.run_in_executor(None, tts_by_edge, text, voice, temp_filename)

        # Tạo serializer cho dữ liệu đầu ra
        output_serializer = TextToSpeechOutputSerializer(data={'audio_url': f'/audio/{temp_filename}'})
        output_serializer.is_valid(raise_exception=True)

        return JsonResponse(output_serializer.data)
