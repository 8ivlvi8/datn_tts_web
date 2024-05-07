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


class TTS_API_Get_Audio(APIView):
    async def generate_audio(self, text, voice, output_file):
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(output_file)

    def post(self, request, format=None):
        # Nhận dữ liệu từ request
        text = str(request.query_params['text'])
        voice = str(request.query_params['voice'])
        output_file = str(request.query_params['output_file'])
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            loop.run_until_complete(
                self.generate_audio(text, voice, output_file))
        finally:
            loop.close()
        return JsonResponse({'message': f'Audio file {output_file} has been generated.'})


async def generate_audio_stream(text, voice):
    communicate = edge_tts.Communicate(text, voice, pitch="+5Hz")
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            yield chunk["data"]
        # elif chunk["type"] == "WordBoundary":
        #     print(f"WordBoundary: {chunk}")


class TTS_API_Get_Audio_Stream(APIView):
    def post(self, request, format=None):
        text = request.query_params.get('text') or request.data.get('text')
        voice = request.query_params.get('voice') or request.data.get('voice')
        response = StreamingHttpResponse(generate_audio_stream(
            text, voice), content_type='audio/mpeg')
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
