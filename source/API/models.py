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
class User(models.Model):
    first = models.CharField(max_length=20)
    mi = models.CharField(max_length=20)
    last = models.CharField(max_length=20)
    username = models.CharField(max_length=20, unique=True)
    user_role = models.ForeignKey("Role", on_delete=models.CASCADE)
    specialties = models.ManyToManyField("Specialty", blank=True)
    niches = models.ManyToManyField("Niche", blank=True)
    projects = models.ManyToManyField("Project", blank=True)
    active = models.BooleanField()

    def __str__(self):
        return str(self.username) + " -> " + self.user_role.name

    class UserAdmin(admin.ModelAdmin):
        filter_horizontal = ('specialties', 'projects', 'niches')
        list_display = ('first', 'mi', 'last', 'username', 'user_role', 'get_specialties', 'get_projects', 'get_niches', 'active')

        # Obj = User
        def get_specialties(self, obj):
            output = "\n".join([str(p) + " : " for p in obj.specialties.all()])[:-2]
            return output

        def get_niches(self, obj):
                return "\n".join([str(p) + " : " for p in obj.niches.all()])[:-2]

        def get_projects(self, obj):
            output = []
            print(obj.username)
            related = False
            print("here")
            for p in obj.projects.all():
                print("Gere")
                print(p)
                for specialty in p.specialties.all():
                    print("S: " + specialty.__str__())
                    if specialty in obj.specialties.all():
                        print("HERE")
                        print(p)
                        output.append(p.name)
            print(output)
            # return "\n".join([str(p) + " : " for p in obj.projects.all()])[:-2]
            return "\n".join([str(p) + " : " for p in output])[:-2]

admin.site.register(User, User.UserAdmin)

class Role(models.Model):
    name = models.CharField(max_length=20, unique=True)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name

    class RoleAdmin(admin.ModelAdmin):
        fields = ('name', 'description')
        list_display = ('name', 'description')

admin.site.register(Role, Role.RoleAdmin)

class ProjectEntry(models.Model):
    username = models.ForeignKey("User", on_delete=models.CASCADE)
    niche = models.ForeignKey("Niche", on_delete=models.CASCADE)
    project = models.ForeignKey("Project", on_delete=models.CASCADE)
    current_score = models.IntegerField(validators=[MaxValueValidator(100), MinValueValidator(0)])
    text_notes = models.CharField(max_length=5000)
    entry_date = models.DateField(auto_now_add=True, editable=False)
    entry_time = models.TimeField(auto_now_add=True, editable=False)
    last_modified_date = models.DateField(auto_now=True, editable=False)
    last_modified_time = models.TimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.username.username + " : Date Entered: " + str(self.entry_date) + " : Current Score: " + str(self.current_score)

    class ProjectEntriesAdmin(admin.ModelAdmin):
        # fields = ('username', 'specialty', 'project', 'current_score', 'text_notes')
        readonly_fields = ('entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')
        list_display = ('username', 'niche', 'project', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time')

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
    specialties = models.ManyToManyField("Specialty")
    niches = models.ManyToManyField("Niche")
    clients = models.ManyToManyField("User")
    denials = models.ManyToManyField("User", related_name="denial_users", blank=True)
    status = models.CharField(max_length=20, choices=STATUS)
    public = models.BooleanField()

    def __str__(self):
        return self.name + " : Status: " + self.status + " : Public: " + str(self.public)

    class ProjectAdmin(admin.ModelAdmin):
        filter_horizontal = ('niches', 'specialties', 'clients', 'denials')
        list_display = ('name', 'description', 'get_specialties', 'get_niches', 'get_clients', 'get_denials', 'status')

        # self = ProjectAdmin - The class that the method is defined in
        # obj = The parameter that the class takes. Project in this case. Based on ModelAdmin - Gives an instance of a django model
        def get_specialties(self, obj):
            return "\n".join([str(p) + " : " for p in obj.specialties.all()])[:-2]

        def get_niches(self, obj):
                return "\n".join([str(p) + " : " for p in obj.niches.all()])[:-2]

        def get_clients(self, obj):
            return "\n".join([str(p) + " : " for p in obj.clients.all()])[:-2]

        def get_denials(self, obj):
            return "\n".join([str(p) + " : " for p in obj.denials.all()])[:-2]


# Establishes connection between project and project admin classes
# Makes ProjectAdmin of type Project
admin.site.register(Project, Project.ProjectAdmin)
