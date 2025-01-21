from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from userauth.models import UserProfile


class UserRegistrationTestCase(APITestCase):
    def test_user_registration(self):
        url = reverse("register")
        data = {
            "username": "newuser",
            "email": "newuser@example.com",
            "password": "securepassword123",
        }

        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, {"message": "User registered successfully!"})


class UserProfileTestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser", email="testuser@example.com", password="password123"
        )

        self.profile, created = UserProfile.objects.get_or_create(user=self.user)

        login_url = reverse("Login")  # Ensure this matches the name in urls.py
        login_data = {"username": "testuser", "password": "password123"}
        login_response = self.client.post(login_url, login_data, format="json")
        self.token = login_response.data["access"]  # Store the token for further use

    def test_get_user_profile(self):
        url = reverse("user-profile")  # URL for getting the user profile

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.token)

        response = self.client.get(url, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(response.data["phone_number"], None)
        self.assertEqual(response.data["address"], None)
        self.assertEqual(response.data["profile_picture"], None)

    def test_update_user_profile(self):
        url = reverse("user-profile")

        update_data = {
            "phone_number": "1234567890",
            "address": "123 Test St, Test City",
        }

        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.token)

        response = self.client.put(url, update_data, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.profile.refresh_from_db()

        self.assertEqual(self.profile.phone_number, update_data["phone_number"])
        self.assertEqual(self.profile.address, update_data["address"])
