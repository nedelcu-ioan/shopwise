from django.urls import path

from .views import prometheus_view

urlpatterns = [
    path("prometheus/", prometheus_view, name="fasz"),
]
