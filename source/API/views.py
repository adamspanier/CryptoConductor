from django.contrib.auth.models import *
from django.contrib.auth import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.template import RequestContext
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import *
from django.contrib.auth.decorators import login_required

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
from rest_framework import permissions

import json, datetime, pytz
from django.core import serializers
from . import serializers as szs
import requests
import re
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='delete')
class Session(APIView):
    permission_classes = [AllowAny]

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
        print(user)
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
        else:
            return self.buildSession(False, None, None, None, "Login Error")

    # delete logout

    def delete(self, request):
        logout(request)
        return self.buildSession(False, None, None, None, "Anon user")

# Custom permission to check for admin
# class AdminCheckPermission(permissions.BasePermission):
#      """
#      Global permission check for staff user
#      """
#
#      def has_permission(self, request, view):
#          return request.user.is_staff():

class SpecialtyListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves specialty data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name']
    queryset = Specialty.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtySerializer

    # can write a function that can customize the get_queryset

class NicheListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Niche data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'specialty']
    queryset = Niche.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheSerializer

class UserListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves User data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'username', 'first_name', 'last_name']
    queryset = User.objects.get_queryset().order_by('id')
    serializer_class = szs.UserSerializer
    filter_fields = ['username']

    def get_queryset(self):
        user = self.request.user
        query = User.objects.filter(username=user.username)
        print(query)
        return query

class ProfileListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Profile data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'user__username', 'user__first_name', 'mi', 'user__last_name']
    queryset = Profile.objects.get_queryset().order_by('id')
    serializer_class = szs.ProfileSerializer
    filter_fields = ['user__username']

    def get_queryset(self):
        user = self.request.user
        print("HERE!!!!: " + user.username)
        return Profile.objects.filter(user__username=user.username)

class GroupListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Group data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name']
    queryset = Group.objects.get_queryset().order_by('id')
    serializer_class = szs.GroupSerializer

class ProjectEntryListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves ProjectEntry data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'user__username', 'niche__name', 'project__name', 'current_score', 'entry_date', 'last_modified_date']
    queryset = ProjectEntry.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectEntrySerializer
    filter_fields = ['user__username']

    # Check if user is admin - if so, give all
    # Otherwise give only projects that belong to the user
    def get_queryset(self):
        user = self.request.user
        if user.username == 'admin':
            return ProjectEntry.objects.get_queryset().order_by('id')
        return ProjectEntry.objects.filter(user__username=user.username)

class ProjectListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Project data to the api
    """
    queryset = Project.objects.get_queryset().order_by('id')
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'users__username', 'niches__name', 'denied_users__username', 'status', 'public']
    serializer_class = szs.ProjectSerializer
    filter_fields = ['users__username']

    # Check if user is admin - if so, give all
    # Otherwise give only projects that belong to the user
    def get_queryset(self):
        user = self.request.user
        if user.username == 'admin':
            return Project.objects.get_queryset().order_by('id')
        return Project.objects.filter(users__username=user.username)

# Eliminate these
"""
Detail oriented viewsets
"""
@action(detail=True)
class SpecialtyDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Specialty detail data to the api
    """
    #permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name']
    queryset = Specialty.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtySerializer

@action(detail=True)
class NicheDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Niche detail data to the api
    """
    #permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'specialty']
    queryset = Niche.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheSerializer

@action(detail=True)
class UserDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves User detail data to the api
    """
    #permission_classes = [IsAuthenticated]
    search_fields = ['id', 'username', 'first_name', 'last_name']
    queryset = User.objects.get_queryset().order_by('id')
    serializer_class = szs.UserSerializer

@action(detail=True)
class GroupDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves group detail data to the api
    """
    #permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name']
    queryset = Group.objects.get_queryset().order_by('id')
    serializer_class = szs.GroupSerializer

@action(detail=True)
class ProjectEntryDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves ProjectEntry detail data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'user', 'niche', 'project', 'current_score', 'entry_date', 'last_modified_date']
    queryset = ProjectEntry.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectEntrySerializer

@action(detail=True)
class ProjectDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Project detail data to the api
    """
    #permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'users', 'niches', 'denied_users', 'status', 'public']
    queryset = Project.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectSerializer

def index(request):
    return render(request, 'index.html')
