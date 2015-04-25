from django.conf.urls import patterns, url
from django.views.generic import TemplateView
from views import Logout,Login


urlpatterns = patterns('',
        url(r'^registration/', TemplateView.as_view(template_name="registration.html")),
        # url(r'^login/', TemplateView.as_view(template_name="login.html")),
        # url(r'^login/submit/', Login.as_view()),
        url(r'^forgetpassword/', TemplateView.as_view(template_name="registration.html")),
        url(r'^login/',Login.as_view()),
        #url(r'^login/$', 'django.contrib.auth.views.login', name="my_login"),
        url(r'^logout/$', Logout.as_view(), name="logout")
            )
