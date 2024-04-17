from tts_api.serializers import TextToSpeechSerializer
from tts_api.models import TextToSpeech
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
import edge_tts
import asyncio
from django.shortcuts import render
from django.http import JsonResponse
import logging
logger = logging.getLogger(__name__)


async def tts_by_edge(text, voice, output_file):
    try:
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(output_file)
    except Exception as e:
        # Xử lý ngoại lệ, ví dụ ghi log lỗi
        print(f"Lỗi chuyển đổi văn bản thành giọng nói: {e}")


def tts_api_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        tts = TextToSpeech.objects.all()
        tts_list = (list(tts))
        for i in tts_list:
            print(i.id)
        serializer = TextToSpeechSerializer(tts, many=True)
        logger.warning(serializer.data)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TextToSpeechSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def tts_api_detail(request, pk):
    """
    Retrieve, update or delete a code snippet. 
    """
    try:
        tts = TextToSpeech.objects.get(id=pk)
        serializer1 = TextToSpeechSerializer(tts)
        print("request.method: ", request.method)
        print("serializer.data: ", serializer1.data)
    except TextToSpeech.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TextToSpeechSerializer(tts)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TextToSpeechSerializer(tts, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        tts.delete()
        return HttpResponse(status=204)
