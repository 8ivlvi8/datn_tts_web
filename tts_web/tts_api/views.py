from tts_api.serializers import TextToSpeechSerializer
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from django.http import JsonResponse
from rest_framework.views import APIView
import requests
from bs4 import BeautifulSoup

# Chuyển đổi các tham số truy vấn thành một từ điển
def convert_query_params_to_dict(query_params):
    params = {}
    for key, value in query_params.items():
        params[key] = value
    return params

def get_text_by_link_and_element(link, element):
    response = requests.get(link)
    soup = BeautifulSoup(response.text, 'html.parser')
    chapter_html = soup.find('div', {'class': element}).prettify()
    chapter_soup = BeautifulSoup(chapter_html, 'html.parser')
    # Loại bỏ các thẻ HTML và chỉ giữ lại nội dung văn bản
    text = chapter_soup.get_text(separator="<br>", strip=True)
    return str(text)


class TTS_API_Get_Text(APIView): 
    def get(self, request, format=None):
        url = request.query_params['url']
        element = request.query_params['element']
        # print("url: ", url)
        # print("element: ", element)
        try:
            extracted_text = get_text_by_link_and_element(url, element)
            return JsonResponse({'extracted_text': extracted_text}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

