# Generated by Django 4.2.11 on 2024-04-23 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='nguonTruyen',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tenNguonTruyen', models.CharField(max_length=200)),
                ('link', models.CharField(max_length=200)),
                ('element', models.CharField(max_length=200)),
                ('nextElement', models.CharField(max_length=200)),
                ('previousElement', models.CharField(max_length=200)),
            ],
        ),
    ]
