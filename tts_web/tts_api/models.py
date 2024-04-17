from django.db import models


class TextToSpeech(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(default="default text")
    code = models.TextField(default="default code")
    url = models.URLField(default="https://example.com")

    class Meta:
        ordering = ['id']
