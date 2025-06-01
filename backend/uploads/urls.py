from django.urls import path
from . import views

urlpatterns = [
    path('csrf/', views.get_csrf_token, name='csrf_token'),
    path('uploads/', views.upload_file, name='upload_file'),
]