from dj_rest_auth.views import LoginView
from django.urls import path

from .views import UserProfileView, UserRegistrationView

urlpatterns = [
    path("login/", LoginView.as_view(), name="Login"),
    path("register/", UserRegistrationView.as_view(), name="register"),
    path("profile/", UserProfileView.as_view(), name="user-profile"),
]
