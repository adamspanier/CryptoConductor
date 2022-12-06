# Serializers live here
#
# from rest_framework import serializers
from . import models
from rest_framework_json_api import serializers

"""
Serializer for Specialties
"""
class SpecialtySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Specialty
        fields = ['id', 'name', 'description']

"""
Serializer for Niches
"""
class NicheSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Niche
        fields = ['id', 'name', 'description', 'specialty']

"""
Serializer for Groups
"""
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Group
        fields = ['name']

"""
Serializer for Users
"""
class UserSerializer(serializers.HyperlinkedModelSerializer):
    groups = serializers.SlugRelatedField(
        many = True,
        read_only = True,
        slug_field = 'name',
    )

    class Meta:
        model = models.User
        fields = ['id', 'first_name', 'last_name', 'email', 'groups', 'username', 'is_active']

"""
Serializer for Profiles
"""
class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['id', 'user', 'mi', 'balance']

"""
Serializer for Projects Entries
"""
class ProjectEntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.ProjectEntry
        fields = ['id', 'username', 'niche', 'project', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time']

"""
Serializer for Projects
"""
class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Project
        fields = ['id', 'name', 'description', 'status', 'public']
