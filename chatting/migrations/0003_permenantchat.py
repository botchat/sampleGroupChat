# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chatting', '0002_chat_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='PermenantChat',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=50)),
                ('message', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name=b'date time')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
