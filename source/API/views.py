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

# Facilitate getting session tokens, creating logins, and deleting session data
@method_decorator(csrf_exempt, name='delete')
class Session(APIView):
    permission_classes = [AllowAny]

    # Helper class that creates a JSON with basic user information
    def buildSession(self, isLoggedIn, username, userid, usergroup, error=""):
        return Response({
            'username': username,
            'usergroup': usergroup,
            'isLoggedIn': isLoggedIn,
            'userid': userid
        })

    # Petition the server for the existing session token
    def get(self, request):
        user = request.user
        print(user)
        if user.is_authenticated:
            group = user.groups.first()
            return self.buildSession(True, user.username, user.id, str(group))
        return self.buildSession(False, None, None, None, "Anon User")

    # Post auth credentials
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

    # Delete current session token and logout
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


# Viewset for Specialties
class SpecialtyListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves specialty data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name']
    queryset = Specialty.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtySerializer

# Viewset for Niches
class NicheListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Niche data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'specialty']
    queryset = Niche.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheSerializer

# Viewset for Users
class UserListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves User data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'username', 'first_name', 'last_name']
    queryset = User.objects.get_queryset().order_by('id')
    serializer_class = szs.UserSerializer
    filter_fields = ['username']

    # return user specific data
    def get_queryset(self):
        user = self.request.user
        query = User.objects.filter(username=user.username)
        print(query)
        return query

# Viewset for additional user data
class ProfileListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Profile data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'user__username', 'user__first_name', 'mi', 'user__last_name']
    queryset = Profile.objects.get_queryset().order_by('id')
    serializer_class = szs.ProfileSerializer
    filter_fields = ['user__username']

    # Return the profile for the logged in user
    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user__username=user.username)

# Viewset for group displays
class GroupListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Group data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name']
    queryset = Group.objects.get_queryset().order_by('id')
    serializer_class = szs.GroupSerializer

# Viewset for Project Entries
class ProjectEntryListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves ProjectEntry data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'user__username', 'niche__name', 'project__name', 'current_score', 'entry_date', 'last_modified_date']
    queryset = ProjectEntry.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectEntrySerializer
    filter_fields = ['user__username']

    # Checks is user is admin.
    # If true, return all projects
    # Otherwise give only projects that belong to the user
    def get_queryset(self):
        user = self.request.user
        if user.username == 'admin':
            return ProjectEntry.objects.get_queryset().order_by('id')
        return ProjectEntry.objects.filter(user__username=user.username)

# Viewset for Projects
class ProjectListViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Project data to the api
    """
    queryset = Project.objects.get_queryset().order_by('id')
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'users__username', 'niches__name', 'denied_users__username', 'status', 'public']
    serializer_class = szs.ProjectSerializer
    filter_fields = ['users__username']

    # Checks is user is admin.
    # If true, return all projects
    # Otherwise give only projects that belong to the user
    def get_queryset(self):
        user = self.request.user
        if user.username == 'admin':
            return Project.objects.get_queryset().order_by('id')
        return Project.objects.filter(users__username=user.username)

"""
Detail oriented viewsets
"""
@action(detail=True)
class SpecialtyDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Specialty detail data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name']
    queryset = Specialty.objects.get_queryset().order_by('id')
    serializer_class = szs.SpecialtySerializer

@action(detail=True)
class NicheDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves Niche detail data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'specialty']
    queryset = Niche.objects.get_queryset().order_by('id')
    serializer_class = szs.NicheSerializer

@action(detail=True)
class UserDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves User detail data to the api
    """
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'username', 'first_name', 'last_name']
    queryset = User.objects.get_queryset().order_by('id')
    serializer_class = szs.UserSerializer

@action(detail=True)
class GroupDetailViewSet(viewsets.ModelViewSet):
    """
    This endpoint serves group detail data to the api
    """
    permission_classes = [IsAuthenticated]
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
    permission_classes = [IsAuthenticated]
    search_fields = ['id', 'name', 'users', 'niches', 'denied_users', 'status', 'public']
    queryset = Project.objects.get_queryset().order_by('id')
    serializer_class = szs.ProjectSerializer

def index(request):
    return render(request, 'index.html')
