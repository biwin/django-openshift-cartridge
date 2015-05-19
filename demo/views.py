import platform
import pip

from django import get_version
from django.shortcuts import render


def home(request):
    c = dict(python_version=platform.python_version(), django_version=get_version(), pip_version=pip.__version__)
    return render(request, 'demo/demo.html', c)
