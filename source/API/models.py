from __future__ import unicode_literals
from django.db import models
from django.core.validators import *
from django.contrib.auth.models import User, Group
from django.contrib import admin
import base64
import re

# Specialty Model
class Specialty(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=500, unique=True)

    def __str__(self):
        return self.name

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
        return self.name + " : " + self.specialty.name

    class NicheAdmin(admin.ModelAdmin):
        fields = ('name', 'description', 'specialty')
        list_display = ('name', 'description', 'specialty')

# User Model
class User(models.Model):
    first = models.CharField(max_length=20)
    mi = models.CharField(max_length=20)
    last = models.CharField(max_length=20)
    username = models.CharField(max_length=20, unique=True)
    role = models.ForeignKey("Role", on_delete=models.CASCADE)
    specialties = models.ManyToManyField("Specialty", through="UserSpecialty", symmetrical=True)
    projects = models.ManyToManyField("Project", through="UserProject", symmetrical=True)
    active = models.BooleanField()

    def __str__(self):
        return self.username + " : " + self.role + " : " + self.active

    class UserAdmin(admin.ModelAdmin):
        fields = ('first', 'mi', 'last', 'username', 'role', 'active')
        list_display = ('first', 'mi', 'last', 'username', 'role', 'active')

# Role Model
class Role(models.Model):
    name = models.CharField(max_length=20, unique=True)
    description = models.CharField(max_length=500)
    users = models.ManyToManyField("User", through="UserRole", symmetrical=True)

    def __str__(self):
        return self.name

    class RoleAdmin(admin.ModelAdmin):
        fields = ('name', 'description', 'users')
        list_display = ('name', 'description', 'users')

# Project Entries Model
class ProjectEntry(models.Model):
    username = models.ForeignKey("User", on_delete=models.CASCADE)
    specialty = models.ForeignKey("Specialty", on_delete=models.CASCADE)
    current_score = models.IntegerField(validators=[MaxValueValidator(100), MinValueValidator(0)])
    text_notes = models.CharField(max_length=5000)
    entry_date = models.DateField(auto_now_add=True)
    entry_time = models.TimeField(auto_now_add=True)
    last_modified_date = models.DateField(auto_now=True)
    last_modified_time = models.TimeField(auto_now=True)

    def __str__(self):
        return self.username + " : Date Entered: " + str(self.entry_date) + " : Current Score: " + str(self.current_score)

    class ProjectEntriesAdmin(admin.ModelAdmin):
        fields = ('username', 'specialty', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')
        list_display = ('username', 'specialty', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')

STATUS = [
    ("OPEN", "OPEN"),
    ("IN PROGRESS", "IN PROGRESS"),
    ("CLOSED", "CLOSED"),
    ("FINAL REVIEW", "FINAL REVIEW"),
]

class Project(models.Model):
    name = models.CharField(max_length=40, unique=True)
    description = models.CharField(max_length=500)
    specialties = models.ManyToManyField("Specialty", through="UserSpecialty", symmetrical=True)
    niches = models.ManyToManyField("Niche", through="ProjectNiche")
    clients = models.ManyToManyField("User", through="UserProject")
    denial = models.ManyToManyField("User", through="UserProject")
    project_entries = models.ForeignKey("ProjectEntry", on_delete.models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS)

    def __str__(self):
        return self.name + " : Status: " + self.status

    class ProjectAdmin(admin.ModelAdmin):
        fields = ('name', 'description', 'specialties', 'niches', 'clients', 'denial', 'project_entries', 'status')
        list_display = ('name', 'description', 'specialties', 'niches', 'clients', 'denial', 'project_entries', 'status')

# Through
class ProjectNiche(models.Model):
    project = models.ForeignKey("Project", unique_together=True, on_delete=models.CASCADE)
    niche = models.ForeignKey("Niche", unique_together=True, on_delete=models.CASCADE)

# Through UserSpecialty Model
class UserSpecialty(models.Model):
    user = models.ForeignKey("User", unique_together=True, on_delete=models.CASCADE)
    specialty = models.ForeignKey("Specialty", unique_together=True, on_delete=models.CASCADE)

# through UserProject Model
class UserProject(models.Model):
    user = models.ForeignKey("User", unique_together=True, on_delete=models.CASCADE)
    specialty = models.ForeignKey("Project", unique_together=True, on_delete=models.CASCADE)

# Through UserRole Model
class UserRole(models.Model):
    user = models.ForeignKey("User", unique_together=True, on_delete=models.CASCADE)
    role = models.ForeignKey("Role", unique_together=True, on_delete=models.CASCADE)
