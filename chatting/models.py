from django.db import models


class Chat(models.Model):
    username = models.CharField(max_length=50)
    message = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date time')
    
    
class PermenantChat(models.Model):
    username = models.CharField(max_length=50)
    message = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date time')
