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
