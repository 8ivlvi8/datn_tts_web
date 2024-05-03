from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets
from .serializers import GroupSerializer, UserSerializer
from .models import nguonTruyen
from rest_framework.views import APIView
import requests
from bs4 import BeautifulSoup
from django.views.decorators.clickjacking import xframe_options_exempt


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


def tts(request):
    template = loader.get_template('homepage.html')
    return HttpResponse(template.render())


def web(request):
    list_nguonTruyen = nguonTruyen.objects.all()
    context = {'list_nguonTruyen': list_nguonTruyen}
    template = loader.get_template('nghetruyen.html')
    return HttpResponse(template.render(context))


class TTS_APT_Get_html(APIView):
    @xframe_options_exempt
    def get(self, request, format=None):
        # Lấy nội dung HTML từ URL
        response = requests.get(request.query_params.get('url') or request.data.get('url') or 'https://truyenfull.vn/')
        html_content = response.text
        soup = BeautifulSoup(html_content, 'html.parser')
        # Tạo một thẻ <script> mới
        new_script_tag = soup.new_tag("script", src="http://letam.myftp.org:8686/static/script_gethtml.js")
        # Thêm script vào cuối <body>
        body_tag = soup.find('body')
        body_tag.append(new_script_tag)

        # Chuyển đổi lại thành chuỗi HTML với mã script được thêm vào
        html_with_script = soup.prettify().encode('utf-8')
        # Trả về kết quả dưới dạng HttpResponse
        return HttpResponse(html_with_script, status=200)