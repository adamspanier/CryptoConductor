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

admin.site.register(Niche, Niche.NicheAdmin)

# User Model
class User(models.Model):
    first = models.CharField(max_length=20)
    mi = models.CharField(max_length=20)
    last = models.CharField(max_length=20)
    username = models.CharField(max_length=20, unique=True)
    user_role = models.ForeignKey("Role", on_delete=models.CASCADE)
    specialties = models.ManyToManyField("Specialty")
    projects = models.ManyToManyField("Project")
    active = models.BooleanField()

    def __str__(self):
        return self.username + " : " + self.user_role.name + " : " + str(self.active)

    def get_specialties(self, obj):
        return "\n".join([p.specialties for p in obj.specialty.all()])

    def get_projects(self, obj):
        return "\n".join([p.projects for p in obj.Project.all()])

    class UserAdmin(admin.ModelAdmin):
        fields = ('first', 'mi', 'last', 'username', 'user_role', 'specialties', 'projects', 'active')
        list_display = ('first', 'mi', 'last', 'username', 'user_role', 'get_specialties', 'get_projects', 'active')


admin.site.register(User, User.UserAdmin)

# Role Model
# Do I need users here?
class Role(models.Model):
    name = models.CharField(max_length=20, unique=True)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name

    class RoleAdmin(admin.ModelAdmin):
        fields = ('name', 'description')
        list_display = ('name', 'description')

admin.site.register(Role, Role.RoleAdmin)

# Project Entries Model
class ProjectEntry(models.Model):
    username = models.ForeignKey("User", on_delete=models.CASCADE)
    specialty = models.ForeignKey("Specialty", on_delete=models.CASCADE)
    project = models.ForeignKey("Project", on_delete=models.CASCADE)
    current_score = models.IntegerField(validators=[MaxValueValidator(100), MinValueValidator(0)])
    text_notes = models.CharField(max_length=5000)
    entry_date = models.DateField(auto_now_add=True, editable=False)
    entry_time = models.TimeField(auto_now_add=True, editable=False)
    last_modified_date = models.DateField(auto_now=True, editable=False)
    last_modified_time = models.TimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.username + " : Date Entered: " + str(self.entry_date) + " : Current Score: " + str(self.current_score)

    class ProjectEntriesAdmin(admin.ModelAdmin):
        fields = ('username', 'specialty', 'project', 'current_score', 'text_notes')
        readonly_fields = ('entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')
        list_display = ('username', 'specialty', 'project', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')

admin.site.register(ProjectEntry, ProjectEntry.ProjectEntriesAdmin)

STATUS = [
    ("OPEN", "OPEN"),
    ("IN PROGRESS", "IN PROGRESS"),
    ("CLOSED", "CLOSED"),
    ("FINAL REVIEW", "FINAL REVIEW"),
]

class Project(models.Model):
    name = models.CharField(max_length=40, unique=True)
    description = models.CharField(max_length=500)
    # specialties = models.ManyToManyField("Specialty")
    niches = models.ManyToManyField("Niche")
    # project_entries = models.ForeignKey("ProjectEntry", on_delete=models.CASCADE) #Gotta figure this one out
    status = models.CharField(max_length=20, choices=STATUS)

    def __str__(self):
        return self.name + " : Status: " + self.status

    # def get_specialties(self, obj):
    #    return "\n".join([p.specialties for p in obj.Specialty.all()])

    def get_niches(self, obj):
        return "\n".join([p.niches for p in obj.Niche.all()])

    class ProjectAdmin(admin.ModelAdmin):
        fields = ('name', 'description', 'niches', 'status')
        list_display = ('name', 'description', 'get_niches', 'status')

admin.site.register(Project, Project.ProjectAdmin)

# Through
class ProjectNiche(models.Model):
    project = models.ForeignKey("Project", on_delete=models.CASCADE)
    niche = models.ForeignKey("Niche", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('project', 'niche')

# Through
class ProjectSpecialty(models.Model):
    project = models.ForeignKey("Project", on_delete=models.CASCADE)
    specialty = models.ForeignKey("Specialty", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('project', 'specialty')

# Through UserSpecialty Model
class UserSpecialty(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE)
    specialty = models.ForeignKey("Specialty", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'specialty')

# through UserProject Model
class UserProject(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE)
    project = models.ForeignKey("Project", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'project')

# through UserProject Model
class DenialProject(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE)
    project = models.ForeignKey("Project", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'project')

# Through UserRole Model
class UserRole(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE)
    role = models.ForeignKey("Role", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'role')
