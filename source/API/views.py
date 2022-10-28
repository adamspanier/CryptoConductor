from django.contrib.auth.models import *
from django.contrib.auth import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.template import RequestContext
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import *

# Import models
from django.db import models
from django.contrib.auth.models import *
from API.models import *

#REST API
from rest_framework import viewsets, filters, parsers, renderers
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *
from rest_framework.decorators import *
from rest_framework.authentication import *

import json, datetime, pytz
from django.core import serializers
from . import serializers as szs
import requests
import re

class ProjectViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to deliver dog data to the api
    """
    queryset = Project.objects.all()
    serializer_class = szs.ProjectSerializer

class ProjectEntryViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to deliver breed data to the api
    """
    queryset = ProjectEntry.objects.all()
    serializer_class = szs.ProjectEntrySerializer

@action(detail=True)
class ProjectDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to deliver dog detail data to the api
    """
    queryset = Project.objects.all()
    serializer_class = szs.ProjectSerializer

@action(detail=True)
class ProjectEntryDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to deliver breed detail data to the api
    """
    queryset = ProjectEntry.objects.all()
    serializer_class = szs.ProjectSerializer

def index(request):
    return HttpResponse("This is now working.")
