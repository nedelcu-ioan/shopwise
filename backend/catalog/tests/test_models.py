import pytest
from catalog.models import Product


@pytest.mark.django_db
def test_product_creation():
    product = Product.objects.create(name="Sample Product", price=100.0)
    assert product.name == "Sample Product"
    assert product.price == 100.0
    assert product.id is not None
