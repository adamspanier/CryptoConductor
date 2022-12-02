# Serializers live here
#
# from rest_framework import serializers
from . import models
from rest_framework_json_api import serializers

class SpecialtySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Specialty
        fields = ['id', 'name', 'description']

class NicheSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Niche
        fields = ['id', 'name', 'description', 'specialty']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Group
        fields = ['name']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    groups = serializers.SlugRelatedField(
        many = True,
        read_only = True,
        slug_field = 'name',
    )

    class Meta:
        model = models.User
        fields = ['id', 'first_name', 'last_name', 'email', 'groups', 'username', 'is_active']

class ProjectEntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.ProjectEntry
        fields = ['id', 'username', 'niche', 'project', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time']

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Project
        fields = ['id', 'name', 'description', 'status', 'public']

# class UserToProjectSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = models.UserToProject
#         fields = ['id', 'user', 'project']
#
# class NicheToProjectSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = models.NicheToProject
#         fields = ['id', 'niche', 'project']
#
# class SpecialtyToProjectSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = models.SpecialtyToProject
#         fields = ['id', 'specialty', 'project']
#
# class DenialToProjectSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = models.DenialToProject
#         fields = ['id', 'denial', 'project']
