from __future__ import unicode_literals
from django.db import models
from django.core.validators import *
from django.contrib.auth.models import User, Group
from django.contrib import admin
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import FilterSet
import base64
import re

# Check if illegal characters exist in text input.
def contains_illegal_chars(value):
    illegal = [
        '>' in value,
        '<' in value,
        '&' in value,
        '/' in value,
        "'" in value,
        ';' in value,
        '[' in value,
        ']' in value
    ]

    if any(illegal):
        raise ValidationError('Please remove all instances of the following: <, >, &, /, \', ;, [, ]')

# Validate UserName
def validate_name(value):
    if " " in value:
        raise ValidationError('Spaces are not allowed in names.')
    if len(value) < 5:
        raise ValidationError('Please choose a name longer than 8 characters')

# Specialty Model
class Specialty(models.Model):
    name = models.CharField(max_length=50, unique=True, validators = [contains_illegal_chars, validate_name])
    description = models.CharField(max_length=500, unique=True, validators = [contains_illegal_chars])

    def __str__(self):
        return str(self.name)

    class SpecialtyAdmin(admin.ModelAdmin):
        fields = ('name', 'description')
        list_display = ('name', 'description')

admin.site.register(Specialty, Specialty.SpecialtyAdmin)

# Niche Model
class Niche(models.Model):
    name = models.CharField(max_length=50, unique=True, validators = [contains_illegal_chars, validate_name])
    description = models.CharField(max_length=500, validators = [contains_illegal_chars])
    specialty = models.ForeignKey("Specialty", on_delete=models.CASCADE)

    def __str__(self):
        return self.name.upper() + " {" + self.specialty.name + "}"

    class NicheAdmin(admin.ModelAdmin):
        fields = ('name', 'description', 'specialty')
        list_display = ('name', 'description', 'specialty')

admin.site.register(Niche, Niche.NicheAdmin)

# Project Entry model
class ProjectEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    niche = models.ForeignKey("Niche", on_delete=models.CASCADE)
    project = models.ForeignKey("Project", on_delete=models.CASCADE)
    current_score = models.IntegerField(validators=[MaxValueValidator(100), MinValueValidator(0)])
    text_notes = models.CharField(max_length=5000, validators = [contains_illegal_chars])
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

# Status array for status validation
STATUS = [
    ("OPEN", "OPEN"),
    ("IN PROGRESS", "IN PROGRESS"),
    ("CLOSED", "CLOSED"),
    ("FINAL REVIEW", "FINAL REVIEW"),
]

# Project model
class Project(models.Model):
    name = models.CharField(max_length=40, unique=True, validators = [contains_illegal_chars, validate_name])
    users = models.ManyToManyField(User, related_name="users")
    niches = models.ManyToManyField("Niche")
    denied_users = models.ManyToManyField(User, related_name="denials", blank=True)
    description = models.CharField(max_length=500, validators = [contains_illegal_chars])
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
