# from django.shortcuts import render
from django.views.generic import View
from django.core.urlresolvers import reverse
from django.contrib.auth import logout
# from django.template import RequestContext
from django.http import HttpResponseRedirect
# from django.shortcuts import render_to_response
from django.contrib.auth import logout,login,authenticate
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect

# Create your views here.
class Login(View):
    """
     Allows user to login TestHarness.
     **Required arguments:**
         username/emailid, password
     **Model(s):**
         User
     **Validation:**
         1] username and password should be exist in User Model for a user.
     **Processing:**
         If validated return user object with session of a user.
     **Context:**
         If validated show Dashboard page else show error message on login page.
     **Form:**
         Login Form
     **Template:**
         login.html
    """
    def get(self, request):
        """
        Render Login page
        """
        return render_to_response('registration/login.html/',{'next':request.GET.get('next')},context_instance=RequestContext(request))
    def post(self, request):
        """
         On login submit, validate username and password for a user.
         If validated set session for a user and show dashboard template else show error message on login template.
        """
        
        errors=[]
        if not request.POST.get('username') and request.POST.get('password'):
            errors.append('Enter Username ')
        if not request.POST.get('password') and request.POST.get('username'):
            errors.append('Enter Password ')
        if not request.POST.get('username') and not request.POST.get('password'):
            errors.append("Enter Username and Password")
        
        
        if not errors:
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    if request.POST.get('remember_me', None):
                        request.session.set_expiry(604800)
                    else:
                        request.session.set_expiry(0)
                    login(request, user)
                    if request.POST.get('next'):
                        return HttpResponseRedirect(request.POST.get('next'))
                    else:
                        return HttpResponseRedirect('/home/logged_user/')
            else:
                errors.append('Enter Proper Username & Password')
        return render_to_response('registration/login.html/',{'errors':errors}, context_instance=RequestContext(request))


class Logout(View):
    """
        To log out a user who has been logged, using django.contrib.auth.logout().
        It takes an HttpRequest object and has no return value
          from django.contrib.auth import logout
          logout(request)
        When you call logout(), the session data for the current request is completely cleaned out. All existing data is removed. 
        This is to prevent another person from using the same Web browser to log in and have access to the previous users session data."""
    def get(self, request):
        """
        logout
        """
        logout(request)
        return HttpResponseRedirect('/auth/login/')


class Registration(View):
    """
     Allow a new user to register an account.
     **Required arguments:**
         first_name, email_id, username, password, repassword
     **Optional arguments:**
         last_name, mobile_number, vertical_app_name
     **Model(s):**
         User
     **Validation:**
         1] username, email_id should be unique.
         2] mandatory fields are first_name, email_id, username, password, repassword.
         3] email_id should be in proper email_id format.
         4] password must be 8 characters including 1 uppercase letter, 1 special characters and Alphanumeric characters.
         5] password and repassword field should be matching.
         6] If mobile_number exists validate 10 digit mobile number.
     **Processing:**
         If form validated create new reacord in User Model and set is_active True, is_superuser True, date_joined current datetime.
     **Context:**
         If validation passed then success message else error message.
     **Form:**
         Registration Form
     **Template:**
         registration.html"""
    def get(self, request):
        """
        Render Registration Template.
        """
        pass

    def post(self, request):
        """
        Submit registration form with validation.
        If validated then create a user reacord and show success message else show error message.
        """
        pass

    def check_unique_emailid(self, request):
        """
        On registration form check unique emailid.
        **Required arguments:**
            emailid
        **Model(s):**
            User
        **Validation:**
            1] Email Id format 
        **Processing:**
            Query User model and check email_id already exist.
        **Context:**
            If email_id already exist then show error message "Email Id already exist" else show success message "Available".
        """


class ChangePassword(View):
    """
    Allow user to change password.
    **Required arguments:**
        user_id, old_password, new_password, re_new_password.
    **Model(s):**
        User
    **Validation:**
        1] old_password should match with password stored in User model for a user.
        2] new_password, re_new_password should be matching.
    **Processing:**
        If form validated then set new password in users record.
    **Context:**
        If form validated and successfully change password done then show success message else show error message.   
    **Form:**
        ChangePassword Form
    **Template:**
        changepassword.html"""
    def get(self, request):
        """
        Render ChangePassword Form
        """
        pass
    def post(self, request):
        """
        On submit of ChangePassword form, validated form. 
        If validated change password with success message else show error message.
        """
        pass

class ForgetPassword(View):
    """
     If User lost the password system provides functionality to reset a new password.
     **Workflow:**
         1] User visits forgot password form which requests the user's email.
         2] Application send an email to the user asking them to click on a link to confirm and complete the password reset request.
     **Required arguments:**
         email_id
     **Model(s):**
         User
     **Validation:**
         1] Validates that an active user exists with the given email address.
     **Processing:**
         Generates a one-use only link for resetting password and sends to the user.
     **Context:**
         On Success, message will be "Reset password link has been sent to your registered email id."
         On Error,
            1] Unknow user message, "That email address doesn't have an associated user account. Are you sure you've registered?".
            2] Unusable user message, "The user account associated with this email address cannot reset the password." 
     **Form:**
         ForgetPassword Form
     **Template:**
         forgetpassword.html
    """
    def get(self, request):
        """
        Render ForgetPassword form
        """
        pass

    def post(self, request):
        """
        Validated an active user exist with the given email address.
        Send an email to the user asking them to click on a link to confirm and complete the password reset request.
        """
        pass

class ResetPassword(View):
    """
    Reset a new password.
     **Workflow:**
         1] User enters in new password, confirms password, and submits.
         2] Application registers the new password and the User can progress with their brand new password.
     **Required arguments:**
         new_password, re_new_password
     **Model(s):**
         User
     **Validation:**
         1] Validates new_password, re_new_password should be match.
     **Processing:**
         Reset password for a user in Users record.
     **Context:**
         Success message OR Error message
     **Form:**
         ResetPassword Form
     **Template:**
         resetpassword.html
    """
    def get(self, request):
        """
        Renders Reset Password Form.
        """
        pass

    def post(self, request):
        """
        Reset password for a user.
        """
        pass
