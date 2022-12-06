# Generated by Django 4.1.1 on 2022-12-02 20:14

import API.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('API', '0005_remove_nichetoproject_niche_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='niche',
            name='description',
            field=models.CharField(max_length=500, validators=[API.models.contains_illegal_chars]),
        ),
        migrations.AlterField(
            model_name='niche',
            name='name',
            field=models.CharField(max_length=50, unique=True, validators=[API.models.contains_illegal_chars, API.models.validate_name]),
        ),
        migrations.AlterField(
            model_name='project',
            name='denied_users',
            field=models.ManyToManyField(blank=True, related_name='denials', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.CharField(max_length=500, validators=[API.models.contains_illegal_chars]),
        ),
        migrations.AlterField(
            model_name='project',
            name='name',
            field=models.CharField(max_length=40, unique=True, validators=[API.models.contains_illegal_chars, API.models.validate_name]),
        ),
        migrations.AlterField(
            model_name='projectentry',
            name='text_notes',
            field=models.CharField(max_length=5000, validators=[API.models.contains_illegal_chars]),
        ),
        migrations.AlterField(
            model_name='specialty',
            name='description',
            field=models.CharField(max_length=500, unique=True, validators=[API.models.contains_illegal_chars]),
        ),
        migrations.AlterField(
            model_name='specialty',
            name='name',
            field=models.CharField(max_length=50, unique=True, validators=[API.models.contains_illegal_chars, API.models.validate_name]),
        ),
    ]
