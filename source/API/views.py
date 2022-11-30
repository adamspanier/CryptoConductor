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
from django.views.decorators.csrf import *

import json, datetime, pytz
from django.core import serializers
from . import serializers as szs
import requests
import re

"""
General View Sets for exposing data
"""

class Session(APIView):
    def buildSession(self, isLoggedIn, username, userid, usergroup, error=""):
        return Response({
            'username': username,
            'usergroup': usergroup,
            'isLoggedIn': isLoggedIn,
            'userid': userid
        })

    # get token
    def get(self, request):
        user = request.user
        if user.is_authenticated:
            group = user.groups.first()
            return self.buildSession(True, user.username, user.id, str(group))
        return self.buildSession(False, None, None, None, "Anon User")

    # post allows authentication, send user and pass, return json=
    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        print(username)
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            group = user.groups.first()
            print(str(group))
            return self.buildSession(True, user.username, user.id, str(group))
            # Redirect to a success page.

        else:
            # Return an 'invalid login' error message.
            # think about some error criteria - present login error
            # maybe say your username pass don't match
            return self.buildSession(False, None, None, None, "Login Error")

    # delete logout
    def delete(self, request):
        print("HERE")
        logout(request)
        return self.buildSession(False, None, None, None, "Anon user")


class SpecialtyListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to specialty data to the api
    """
    queryset = Specialty.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtySerializer

class NicheListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to Niche data to the api
    """
    queryset = Niche.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheSerializer

class UserListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to User data to the api
    """
    queryset = User.objects.get_queryset().order_by('id')
    serializer_class = szs.UserSerializer

class ProjectEntryListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to ProjectEntry data to the api
    """
    queryset = ProjectEntry.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectEntrySerializer

class ProjectListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to Project data to the api
    """
    queryset = Project.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectSerializer

class UserToProjectListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to UserToProject data to the api
    """
    queryset = UserToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.UserToProjectSerializer

class NicheToProjectListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to NicheToProject data to the api
    """
    queryset = NicheToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheToProjectSerializer

class SpecialtyToProjectListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to SpecialtyToProject data to the api
    """
    queryset = SpecialtyToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtyToProjectSerializer

class DenialToProjectListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to DenialToProject data to the api
    """
    queryset = DenialToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.DenialToProjectSerializer

"""
Detail oriented viewsets
"""
@action(detail=True)
class SpecialtyDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to specialty data to the api
    """
    queryset = Specialty.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtySerializer

@action(detail=True)
class NicheDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to Niche data to the api
    """
    queryset = Niche.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheSerializer

@action(detail=True)
class UserDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to User data to the api
    """
    queryset = User.objects.get_queryset().order_by('id')
    serializer_class = szs.UserSerializer

@action(detail=True)
class ProjectEntryDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to ProjectEntry data to the api
    """
    queryset = ProjectEntry.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectEntrySerializer

@action(detail=True)
class ProjectDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to Project data to the api
    """
    queryset = Project.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectSerializer

@action(detail=True)
class UserToProjectDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to UserToProject data to the api
    """
    queryset = UserToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.UserToProjectSerializer

@action(detail=True)
class NicheToProjectDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to NicheToProject data to the api
    """
    queryset = NicheToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheToProjectSerializer

@action(detail=True)
class SpecialtyToProjectDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to SpecialtyToProject data to the api
    """
    queryset = SpecialtyToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtyToProjectSerializer

@action(detail=True)
class DenialToProjectDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves to DenialToProject data to the api
    """
    queryset = DenialToProject.objects.get_queryset().order_by('id')
    serializer_class = szs.DenialToProjectSerializer

def index(request):
    return render(request, 'index.html')
