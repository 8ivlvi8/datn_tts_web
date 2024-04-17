from tts_api.serializers import TextToSpeechSerializer
from tts_api.models import TextToSpeech
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
import edge_tts
import asyncio
from django.shortcuts import render
from django.http import JsonResponse
from django.http import Http404
from rest_framework.views import APIView


class TTS_API_List(APIView):
    def get(self, request, format=None):
        tts = TextToSpeech.objects.all()
        serializer = TextToSpeechSerializer(tts, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        data = JSONParser().parse(request)
        serializer = TextToSpeechSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class TTS_API_Detail(APIView):
    def get(self, request, pk, format=None):
        try:
            tts = TextToSpeech.objects.get(pk=pk)
            serializer = TextToSpeechSerializer(tts)
            return JsonResponse(serializer.data)
        except TextToSpeech.DoesNotExist:
            return HttpResponse(status=404)

    def put(self, request, pk, format=None):
        try:
            tts = TextToSpeech.objects.get(pk=pk)
            data = JSONParser().parse(request)
            serializer = TextToSpeechSerializer(tts, data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=400)
        except TextToSpeech.DoesNotExist:
            return HttpResponse(status=404)

    def delete(self, request, pk, format=None):
        try:
            tts = TextToSpeech.objects.get(pk=pk)
            tts.delete()
            return HttpResponse(status=204)
        except TextToSpeech.DoesNotExist:
            return HttpResponse(status=404)
        
