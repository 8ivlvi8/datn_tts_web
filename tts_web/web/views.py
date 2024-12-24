from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from rest_framework import permissions, viewsets
from rest_framework.views import APIView
import requests
from bs4 import BeautifulSoup
from django.views.decorators.clickjacking import xframe_options_exempt


def tts(request):
    template = loader.get_template('homepage.html')
    return HttpResponse(template.render())


class Get_html(APIView):
    def get_html(url):
        response = requests.get(url)
        html_content = response.text
        soup = BeautifulSoup(html_content, 'html.parser')
        # Tạo một thẻ <script> mới
        new_script_tag = soup.new_tag("script", src="/static/js/script_gethtml.js")
        # Thêm script vào cuối <body>
        body_tag = soup.find('body')
        body_tag.append(new_script_tag)
        # Chuyển đổi lại thành chuỗi HTML với mã script được thêm vào
        html_with_script = soup.prettify().encode('utf-8')
        return html_with_script

    @xframe_options_exempt
    def get(self, request, format=None):
        # Lấy nội dung HTML từ URL
        url = request.query_params.get('url') or request.data.get('url') or 'https://truyenfull.io'
        if not (url.startswith('https://truyenfull')):
            return HttpResponse(loader.get_template('404.html').render(), status=404)
        # Xử lý nếu là tìm kiếm truyện
        tukhoa = request.query_params.get('tukhoa') or request.data.get('tukhoa')
        if tukhoa:
            url = (f"https://truyenfull.io/tim-kiem/?tukhoa=" + str(tukhoa).strip())
        try:
            result = Get_html.get_html(url)
        except:
            result = Get_html.get_html("https://truyenfull.io/danh-sach/truyen-hot/")
        # Trả về kết quả dưới dạng HttpResponse
        return HttpResponse(result, status=200)
