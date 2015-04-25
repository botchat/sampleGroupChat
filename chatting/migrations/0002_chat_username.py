# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('chatting', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='username',
            field=models.CharField(default=datetime.datetime(2015, 3, 31, 5, 59, 16, 478611, tzinfo=utc), max_length=50),
            preserve_default=False,
        ),
    ]
