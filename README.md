
# datn_tts_web

`datn_tts_web` sử dụng Django Framework và gói `edge-tts` của python, tạo thành trang web có hai chức năng chính là chuyển đổi văn bản tiếng Việt thành giọng nói và nghe truyện từ trang https://truyenfull.vn/

## Cài đặt

Trên Window:

- Cài đặt Microsoft Edge tại https://www.microsoft.com/vi-vn/edge/download

- Cài đặt Python tại https://www.python.org/downloads/

    - Cài đặt các gói cần thiết:
```bash
        pip install django rest_framework django_rest_framework whitenoise requests bs4 edge_tts asyncio
```
## Chạy local

Clone dự án

```bash
  git clone https://github.com/8ivlvi8/datn_tts_web
```

Di chuyển vào tts_web

```bash
  cd tts_web
```

Khởi động máy chủ

```bash
  py manage.py runserver
```


## Demo

Dự án đang được demo tại địa chỉ:  https://letam.io.vn/
