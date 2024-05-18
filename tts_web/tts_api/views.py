from django.http import JsonResponse, StreamingHttpResponse, HttpResponse
from rest_framework.views import APIView
import requests
from web.templates import *
from django.shortcuts import render
from bs4 import BeautifulSoup
import edge_tts
import asyncio
from django.views.decorators.clickjacking import xframe_options_exempt
from django.template import loader

# Hàm không đồng bộ trả về từng đoạn audio với input tương ứng 
async def generate_audio_stream(text, voice, rate):
    communicate = edge_tts.Communicate(text=text, voice=voice, rate=rate)
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            yield chunk["data"]
# API nhận các tham số từ client, gọi tới hàm lấy audio và trả về cho client ở dạng audio
class TTS_API_Get_Audio_Stream(APIView):
    def post(self, request, format=None):
        text = request.query_params.get('text') or request.data.get('text')
        voice = request.query_params.get('voice') or request.data.get('voice')
        rate = request.query_params.get('rate') or request.data.get('rate') or "+0%"
        response = StreamingHttpResponse(generate_audio_stream(
            text, voice, rate), content_type='audio/mpeg')
        return response


class TTS_API_Get_List_Chapter(APIView):
    def get(self, request, format=None):
        truyen_id = request.query_params.get(
            'truyen_id') or request.data.get('truyen_id')
        response = requests.get(
            "https://truyenfull.vn/ajax.php", params={'type': 'chapter_option', 'data': truyen_id})
        html_content = response.text.replace('chapter_jump', '')
        list_chapter = BeautifulSoup(
            html_content, 'html.parser').prettify().encode('utf-8')
        return HttpResponse(list_chapter, status=200)


class TTS_API_Get_Audio_Player(APIView):
    def get(self, request, format=None):
        return HttpResponse(loader.get_template('nghetruyen.html').render(), status=200)
