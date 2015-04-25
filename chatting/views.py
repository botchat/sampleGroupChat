#from django.shortcuts import render
from django.views.generic import View
from django.views.generic.list import ListView
from django.shortcuts import render_to_response
#from django.template import RequestContext
from django.http import HttpResponseRedirect
from django.core.context_processors import csrf
from django.contrib.auth.models import User
from chatting.models import Chat, PermenantChat
from sampleGroupChat.settings import MAX_NO_OF_MSG_TO_SHOW
from datetime import datetime
import socket
import sys
import select


# Create your views here.

class mainPage(View):
    """
    home
    """
    def get(self, request):
        """
        render home page for site
        """
        return render_to_response('chatbotclassifier/home.html')
        
    def post(self, request):
        """
        Save user info to the database
        and redirect user to main page of site.
        """
        newUser = User(username = request.POST.get('username'),
                       first_name = request.POST.get('first_name'),
                       last_name = request.POST.get('last_name'),
                       email = request.POST.get('email'),)
        newUser.save()
        newUser.is_staff = True
        newUser.set_password(request.POST.get('password'))
        newUser.save()
        return HttpResponseRedirect('/home/main')
    
    
class addUser(View):
    """
    sign up
    """
    def get(self, request):
        """
        render add user page
        """
        c = {}
        c.update(csrf(request))
        return render_to_response('Organisation/user_add.html', c)
        
    def post(self, request):
        """
        """
        pass
    
    
class userHome(View):
    """
    logged user
    """
    def get(self, request):
        """
        render home page for user
        """
        c = {}
        c.update(csrf(request))
        if request.user.username:
            c['user'] = request.user.username
            return render_to_response('chatbotclassifier/LoggedUser.html', c)
        else:
            return HttpResponseRedirect('/auth/login')
            
    def post(self, request):
        """
        """
        pass
    
class quitChat(View):
    """
    quit chatting
    """
    def get(self, request):
        """
        quit chat
        render home page for user
        """
        #chatList = Chat.objects.all()
        #if len(chatList) > MAX_NO_OF_MSG_TO_SHOW:
        #    for counter in range(len(chatList) - MAX_NO_OF_MSG_TO_SHOW):
        #        chatList[0].delete()
        #newChat = Chat(username='_', message='%s left' % (request.user.username),
        #                pub_date=datetime.now())
        #newChat.save()
        return HttpResponseRedirect('/home/logged_user')
    
    def post(self, request):
        """
        """
        pass
    
class joinChat(ListView):
    """
    chat page for user
    """
    model = Chat
    template_name = 'chatbotclassifier/joinChat.html'
    
    def get_context_data(self, **kwargs):
        context = super(joinChat, self).get_context_data(**kwargs)
        chatList = Chat.objects.all()
        displayCount = 0
        if len(chatList) > MAX_NO_OF_MSG_TO_SHOW:
            displayCount = len(chatList) - MAX_NO_OF_MSG_TO_SHOW
        else:
            displayCount = 0
        context['groupChat'] = chatList[displayCount:]
        #contest['user'] = request.user.username
        return context
    
    def post(self, request):
        """
        Send the message to server
        store it to db
        and update chatPage
        """
        chatList = Chat.objects.all()
        if len(chatList) > MAX_NO_OF_MSG_TO_SHOW:
            for counter in range(len(chatList) - MAX_NO_OF_MSG_TO_SHOW):
                chatList[0].delete()
        newChat = Chat(username=request.user.username, message=request.POST.get('usermsg'),
                        pub_date=datetime.now())
        newChat.save()
        newChat = PermenantChat(username=request.user.username, message=request.POST.get('usermsg'),
                        pub_date=datetime.now())
        newChat.save()
        return HttpResponseRedirect('/home/join_chat')
    