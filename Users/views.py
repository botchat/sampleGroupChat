from django.shortcuts import render
from django.views.generic import ListView, View
from django.views.generic.edit import CreateView, UpdateView, DeleteView

# Create your views here.

class UserCreate(CreateView):
    """
     Creates User record in User Model with validation at server side.
     **Required arguments:**
         Username, Password, First Name, Email Id
     **Optional arguments:**
         Last Name, Mobile No 
     **Model(s):**
         User
     **Validation:**
         1] Unique Fields : Email, Username
         2] Mandatory Fields : Username, Password, First Name, Email Id
         3] Email Id format should be validated.
         4] Password must be 8 characters including 1 uppercase letter, 1 special characters and Alphanumeric characters.
         5] If Mobile Number exists validate 10 digit mobile number.
     **Processing:**
        If all above validation passed then create record in User Model and show success message to user on updated Listing page. 
        Else show error message to user on New User page.
     **Context:**
        Success or Error Message
     **Form:**
         User Form
     **Template:**
         adduser.html
    """
    pass

class AssignPermission(View):
    """
     Assign Permission to selected user.
     Examples :
        Permissions:
             --------------------------------------
            | AppName | ModelName | Permissions     |
             ---------------------------------------
            | auth    | user      | Can add user    |
            | auth    | user      | Can change user |
            | auth    | user      | Can delete user |
             ---------------------------------------
     **Required arguments:**
         userid, group_id(s), permission_id(s)
     **Model(s):**
         User, Permission
     **Processing:**
        Update User record with assign permission.
        Permissions can be Appwise change, delete, add, view access.
     **Context:**
        Success or Error Message
     **Form:**
         User Form
     **Template:**
         adduser.html
    """
    def post(self, request):
        pass


class UserUpdate(UpdateView):
    """
    Updates User record in User Model with validation at server side.
    Model: User 
    Validation : 
    1] Unique Fields : Email, Username
    2] Mandatory Fields : Username, Password, First Name, Email Id
    3] Email Id format should be validated.
    4] Password must be 8 characters including 1 uppercase letter, 1 special characters and Alphanumeric characters.
    5] If Mobile Number exists validate 10 digit mobile number.
    If all above validation passed then update record in User Model and show success message to user on updated Listing page. 
    Else show error message to user on Edit User page.
    Input: userid, username, password, firstname, lastname, emailid, is_active 
    Output: Success message OR error message
    """
    pass

class UserDelete(DeleteView):
    """
    Delete User record from User Model and its related records in other Models.
    Models: User, TestScenarios(related Executions and ScheduledJobs), Gateway(related Sensors), LogEntry, UserConfiguration 
    Input: userid
    Output: Success message OR error message
    """
    pass

class User(View):
    """
    Perform User related functionality excluding Users List, Create, Update, Delete.
    """
    def get(self, request):
        """
        Before create new user validate entered username and emailid are unique(Ajax Request).

        if Param == 'validate_username':
            self.validate_unique_username()
        elif Param == 'validate_emailid':
            self.validate_unique_emailid()
        Input: param, paramvalue
        Output: Exist OR Not Exist
        """
        pass

    def validate_unique_username(self, request):
        """
        Validate username should be unique.
        Input: username
        Output: Exist OR Not Exist
        """
        pass

    def validate_unique_emailid(self, request):
        """
        Validate emailid should be unique.
        Input: emailid
        Output: Exist OR Not Exist
        """
        pass

