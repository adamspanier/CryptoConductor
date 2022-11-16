# Serializers live here

from rest_framework import serializers
from . import models

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Project
        fields = ['name', 'description', 'specialties', 'niches', 'clients', 'denials', 'status', 'public']

class ProjectEntrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.ProjectEntry
        fields = ['username', 'niche', 'project', 'current_score', 'text_notes', 'entry_date', 'entry_time', 'last_modified_date', 'last_modified_time']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.ProjectEntry
        fields = ['first', 'mi', 'last', 'username']
