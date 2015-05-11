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
from classifier import Classifier


# Create your views here.
chatTupleList = []
botList = []
classifierObj = Classifier()
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
        return HttpResponseRedirect('/home/logged_user')
    
    def post(self, request):
        """
        """
        pass
    
class joinChat(View):
    """
    chat page for user
    """
    def get(self, request):
        c = {}
        c.update(csrf(request))
        chatList = chatTupleList
        displayCount = 0
        if len(chatList) > MAX_NO_OF_MSG_TO_SHOW:
            displayCount = len(chatList) - MAX_NO_OF_MSG_TO_SHOW
        else:
            displayCount = 0
        c['groupChat'] = chatList[displayCount:]
        c['user'] = request.user.username
        #verifying admin
        if request.user.id == 1:
            c['botList'] = botList
        else:
            c['botList'] = []
        return render_to_response('chatbotclassifier/joinChat.html', c)
    
    def post(self, request):
        """
        Send the message to server
        store it to db
        and update chatPage
        """
        
        c = {}
        c.update(csrf(request))
        chatList = chatTupleList
        if len(chatList) > MAX_NO_OF_MSG_TO_SHOW:
            for counter in range(len(chatList) - MAX_NO_OF_MSG_TO_SHOW):
                chatList.remove(chatList[0])
        username=request.user.username
        message=request.POST.get('usermsg')
        link = ''
        pub_date=datetime.now()
        message, newBotList = classifierObj.filterMessage((username, message, pub_date))
        
        # updating botlist
        if botList != newBotList:
            for bot in newBotList:
                if bot not in botList:
                    botList.append(bot)
        else:
            pass
        
        # simple link identification    
        if message.startswith('http'):
            link = message
            message = ''
        else:
            pass
        if message.strip() or link.strip():
            chatList.append((username, message, pub_date, link))
        
        return HttpResponseRedirect('/home/join_chat', c)
    
def getChat(request):
    '''
    This function is used for ajax call
    '''
    context = {}
    context.update(csrf(request))
    chatList = chatTupleList
    displayCount = 0
    if len(chatList) > MAX_NO_OF_MSG_TO_SHOW:
        displayCount = len(chatList) - MAX_NO_OF_MSG_TO_SHOW
    else:
        displayCount = 0
    context['groupChat'] = chatList[displayCount:]
    
    #verifying admin
    if request.user.id == 1:
        context['botList'] = botList
    else:
        context['botList'] = []
        
    if request.user.username:
        context['user'] = request.user.username
        return render_to_response('chatbotclassifier/getChat.html', context)
