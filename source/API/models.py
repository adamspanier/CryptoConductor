from __future__ import unicode_literals
from django.db import models
from django.core.validators import *
from django.contrib.auth.models import User, Group
from django.contrib import admin
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import FilterSet
import base64
import re

# User filter
class UserFilter(FilterSet):
    class Meta:
        model = User
        fields = ['username']

# Specialty Model
class Specialty(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=500, unique=True)

    def __str__(self):
        return str(self.name)

    class SpecialtyAdmin(admin.ModelAdmin):
        fields = ('name', 'description')
        list_display = ('name', 'description')

admin.site.register(Specialty, Specialty.SpecialtyAdmin)

# Niche Model
class Niche(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=500)
    specialty = models.ForeignKey("Specialty", on_delete=models.CASCADE)

    def __str__(self):
        return self.name.upper() + " {" + self.specialty.name + "}"

    class NicheAdmin(admin.ModelAdmin):
        fields = ('name', 'description', 'specialty')
        list_display = ('name', 'description', 'specialty')

admin.site.register(Niche, Niche.NicheAdmin)

# User Model
# Don't need

class ProjectEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    niche = models.ForeignKey("Niche", on_delete=models.CASCADE)
    project = models.ForeignKey("Project", on_delete=models.CASCADE)
    current_score = models.IntegerField(validators=[MaxValueValidator(100), MinValueValidator(0)])
    text_notes = models.CharField(max_length=5000)
    entry_date = models.DateField(auto_now_add=True, editable=False)
    entry_time = models.TimeField(auto_now_add=True, editable=False)
    last_modified_date = models.DateField(auto_now=True, editable=False)
    last_modified_time = models.TimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.user.username + " : Date Entered: " + str(self.entry_date) + " : Current Score: " + str(self.current_score)

    class ProjectEntriesAdmin(admin.ModelAdmin):
        # fields = ('username', 'specialty', 'project', 'current_score', 'text_notes')
        readonly_fields = ('entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')
        list_display = ('user', 'niche', 'project', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')

admin.site.register(ProjectEntry, ProjectEntry.ProjectEntriesAdmin)

STATUS = [
    ("OPEN", "OPEN"),
    ("IN PROGRESS", "IN PROGRESS"),
    ("CLOSED", "CLOSED"),
    ("FINAL REVIEW", "FINAL REVIEW"),
]

class Project(models.Model):
    name = models.CharField(max_length=40, unique=True)
    users = models.ManyToManyField(User, related_name="users")
    niches = models.ManyToManyField("Niche")
    denied_users = models.ManyToManyField(User, related_name="denials")
    description = models.CharField(max_length=500)
    status = models.CharField(max_length=20, choices=STATUS)
    public = models.BooleanField()

    def __str__(self):
        return self.name + " : Status: " + self.status + " : Public: " + str(self.public)

    class ProjectAdmin(admin.ModelAdmin):
        filter_horizontal = ('users', 'niches', 'denied_users')
        list_display = ('name', 'description', 'status')

        # self = ProjectAdmin - The class that the method is defined in
        # obj = The parameter that the class takes. Project in this case. Based on ModelAdmin - Gives an instance of a django model


# Establishes connection between project and project admin classes
# Makes ProjectAdmin of type Project
admin.site.register(Project, Project.ProjectAdmin)

# Use this to find all projects related to users, and all users related to projectDashboard
# select user where project.id = 1
# select project where user.id = 2 etc.
# class UserToProject(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     project = models.ForeignKey("Project", on_delete=models.CASCADE)
#
#     def __str__(self):
#         return "Username - " + str(self.user.username) + " : Project - " + str(self.project.name)
#
#     class UserToProjectAdmin(admin.ModelAdmin):
#         list_display = ('id', 'user', 'project')

# admin.site.register(UserToProject, UserToProject.UserToProjectAdmin)

# Use this table to find niches that are correlated to projects and vice versa
# select project where niche.id = 1
# select niche where project.id = 2 etc.
# class NicheToProject(models.Model):
#     niche = models.ForeignKey("Niche", on_delete=models.CASCADE)
#     project = models.ForeignKey("Project", on_delete=models.CASCADE)
#
#     def __str__(self):
#         return "Niche - " + str(self.niche.name) + " : Project - " + str(self.project.name)
#
#     class NicheToProjectAdmin(admin.ModelAdmin):
#         list_display = ('id', 'niche', 'project')
#
# admin.site.register(NicheToProject, NicheToProject.NicheToProjectAdmin)

# Use this table to find specialties that are related to projects and vice versa
# select project where specialty.id = 1
# select specialty where project.id = 2 etc.
# class SpecialtyToProject(models.Model):
#     specialty = models.ForeignKey("Specialty", on_delete=models.CASCADE)
#     project = models.ForeignKey("Project", on_delete=models.CASCADE)
#
#     def __str__(self):
#         return "Specialty - " + str(self.specialty.name) + " : Project - " + str(self.project.name)
#
#     class SpecialtyToProjectAdmin(admin.ModelAdmin):
#         list_display = ('id', 'specialty', 'project')
#
# admin.site.register(SpecialtyToProject, SpecialtyToProject.SpecialtyToProjectAdmin)

# Use this table to find users that are denied certain projects and vice versa
# select denial where project.id = 1
# select project where denial.id = 2 ,etc
# class DenialToProject(models.Model):
#     denial = models.ForeignKey(User, on_delete=models.CASCADE)
#     project = models.ForeignKey("Project", on_delete=models.CASCADE)
#
#     def __str__(self):
#         return "Denied User - " + str(self.denial.username) + " : Project - " + str(self.project.name)
#
#     class DenialToProjectAdmin(admin.ModelAdmin):
#         list_display = ('id', 'denial', 'project')
#
# admin.site.register(DenialToProject, DenialToProject.DenialToProjectAdmin)
