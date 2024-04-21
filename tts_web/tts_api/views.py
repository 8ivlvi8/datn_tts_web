from django.http import JsonResponse, StreamingHttpResponse
from rest_framework.views import APIView
import requests
from bs4 import BeautifulSoup
import edge_tts
import asyncio

def get_text_by_link_and_element(link, element):
    response = requests.get(link)
    soup = BeautifulSoup(response.text, 'html.parser')
    chapter_html = soup.find('div', {'class': element}).prettify()
    chapter_soup = BeautifulSoup(chapter_html, 'html.parser')
    # Loại bỏ các thẻ HTML và chỉ giữ lại nội dung văn bản
    text = chapter_soup.get_text(separator="<br>", strip=True)
    return str(text)


class TTS_API_Get_Text(APIView):
    def post(self, request, format=None):
        url = request.query_params['url']
        element = request.query_params['element']
        # print("url: ", url)
        # print("element: ", element)
        try:
            extracted_text_html = get_text_by_link_and_element(url, element)
            extracted_text = extracted_text_html.replace("<br>", " ")
            return JsonResponse({'extracted_text_html': extracted_text_html, 'extracted_text': extracted_text}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)


class TTS_API_Get_Audio(APIView):
    async def generate_audio(self, text, voice, output_file):
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(output_file)

    def post(self, request, format=None):
        # Nhận dữ liệu từ request
        text = str(request.query_params['text'])
        voice = str(request.query_params['voice'])
        output_file = str(request.query_params['output_file'])
        # voice = str(request.data.get('voice'))
        # output_file = str(request.data.get('output_file'))

        # Kiểm tra và chạy hàm tạo audio bất đồng bộ
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            loop.run_until_complete(
                self.generate_audio(text, voice, output_file))
        finally:
            loop.close()

        return JsonResponse({'message': f'Audio file {output_file} has been generated.'})


async def generate_audio_stream(text, voice, output_file):
    communicate = edge_tts.Communicate(text, voice)
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            yield chunk["data"]
        elif chunk["type"] == "WordBoundary":
            print(f"WordBoundary: {chunk}")

class TTS_API_Get_Audio_Stream(APIView):
    def post(self, request, format=None):
        text = request.query_params.get('text', '')
        voice = request.query_params.get('voice', 'vi-VN-HoaiMyNeural')
        output_file = request.query_params.get('output_file', 'tts_audio.mp3')

        # Trả về dữ liệu âm thanh dưới dạng streaming
        response = StreamingHttpResponse(generate_audio_stream(text, voice, output_file), content_type='audio/mpeg')
        response['Content-Disposition'] = f'attachment; filename="{output_file}"'
        return response

