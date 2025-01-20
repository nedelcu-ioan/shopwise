from dj_rest_auth.views import LoginView
from django.urls import path

urlpatterns = [
    path("login", LoginView.as_view(), name="Login"),
]
