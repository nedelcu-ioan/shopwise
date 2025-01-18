from django.urls import path
from .views import hello_world, ProductListView

urlpatterns = [
    path('hello/', hello_world, name='hello_world'),
    path('products/', ProductListView.as_view(), name='product-list'),
]

