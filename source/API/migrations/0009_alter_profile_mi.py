# Generated by Django 4.1.1 on 2022-12-06 03:54

import API.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0008_alter_profile_balance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='mi',
            field=models.CharField(max_length=40, unique=True, validators=[API.models.contains_illegal_chars]),
        ),
    ]
