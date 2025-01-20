import os
import random

from catalog.models import Product
from django.conf import settings
from django.core.management.base import BaseCommand
from faker import Faker

fake = Faker()


class Command(BaseCommand):
    help = "Populate the catalog with random products"

    def handle(self, *args, **kwargs):
        num_products = 50  # Number of products to create
        media_products_path = os.path.join(settings.MEDIA_ROOT, "products")

        # Ensure the media/products folder exists
        os.makedirs(media_products_path, exist_ok=True)

        # List of sample images you have in media/products/
        sample_images = [f"sample{random.randint(1, 5)}.jpg" for _ in range(5)]

        for _ in range(num_products):
            name = fake.word().capitalize()
            description = fake.sentence(nb_words=12)
            price = round(random.uniform(10.00, 500.00), 2)

            # Choose a random image from the sample images
            image = random.choice(sample_images)

            # Create a new product
            Product.objects.create(
                name=name,
                description=description,
                price=price,
                image=f"products/{image}",  # This will store the images in media/products/
            )
        self.stdout.write(
            self.style.SUCCESS(f"Successfully added {num_products} products.")
        )
