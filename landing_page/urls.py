from django.urls import path
from django_distill import distill_path
from . import views

def get_none():
    return None

urlpatterns = [
    distill_path('', views.index, name='index', distill_func=get_none, distill_file='index.html'),
]
