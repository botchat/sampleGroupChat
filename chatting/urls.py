from django.conf.urls import patterns, url
from chatting.views import mainPage, addUser, userHome, joinChat, quitChat

urlpatterns = patterns('',
    url(r'^main/$', mainPage.as_view(), name='home'),
    url(r'^add_user/$', addUser.as_view(), name='add_user'),
    url(r'^logged_user/$', userHome.as_view(), name='logged_user'),
    url(r'^join_chat/$', joinChat.as_view(), name='join_chat'),
    url(r'^quit_chat/$', quitChat.as_view(), name='quit_chat'),
)
