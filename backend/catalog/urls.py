from django.urls import path

from .views import ProductListView, hello_world

urlpatterns = [
    path("hello/", hello_world, name="hello_world"),
    path("products/", ProductListView.as_view(), name="product-list"),
]
