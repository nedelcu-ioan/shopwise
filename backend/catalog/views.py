from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


@api_view(["GET"])
def hello_world(request):
    return Response({"message": "Hello World"})


class ProductPagination(PageNumberPagination):
    page_size = 10  # Number of products per page
    page_size_query_param = "page_size"
    max_page_size = 100


class ProductListView(ListAPIView):
    queryset = Product.objects.all().order_by("-created_at")
    serializer_class = ProductSerializer
    pagination_class = ProductPagination
