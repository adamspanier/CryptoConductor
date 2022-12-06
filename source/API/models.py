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

    def is_in(self):
        user_list = ""
        user_list = self.users.all()
        for user in user_list:
            print("test")

    class ProjectAdmin(admin.ModelAdmin):
        filter_horizontal = ('users', 'niches', 'denied_users')
        list_display = ('name', 'description', 'get_users', 'get_niches', 'status')

        # Gets user first and last names for each project
        def get_users(self, obj):
            user_list = ""
            users = obj.users.all()
            count = 0
            for user in users:
                if user.first_name is not "":
                    user_list += user.first_name + " " + user.last_name + ", "
            return user_list[:-2]

        # Gets all niches associated with each project
        def get_niches(self, obj):
            niche_list = ""
            niches = obj.niches.all()
            for niche in niches:
                niche_list += niche.name + ", "
            return niche_list[:-2]

admin.site.register(Project, Project.ProjectAdmin)

# Profile model - provides additional information about each user
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mi = models.CharField(max_length=40, validators = [contains_illegal_chars])
    balance = models.IntegerField(validators=[MaxValueValidator(2000000000), MinValueValidator(-2000000000)])
    specialties = models.ManyToManyField("Specialty", blank=True)
    niches = models.ManyToManyField("Niche", blank=True)

    class ProfileAdmin(admin.ModelAdmin):
        filter_horizontal = ('specialties', 'niches')
        list_display = ('get_first', 'mi', 'get_last', 'get_username', 'get_role', 'make_balance')

        # Get user first name
        def get_first(self, obj):
            return obj.user.first_name

        # Get user last name
        def get_last(self, obj):
            return obj.user.last_name

        # Get user username
        def get_username(self, obj):
            return obj.user.username

        # Get user balance
        def make_balance(self,obj):
            return "$" + str('{:,}'.format(obj.balance))

        # Get user balance
        def get_role(self, obj):
            groups = obj.user.groups.all()
            return groups[0].name

admin.site.register(Profile, Profile.ProfileAdmin)
