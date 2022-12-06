# Generated by Django 4.1.1 on 2022-12-06 03:54

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0007_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='balance',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(2000000000), django.core.validators.MinValueValidator(-2000000000)]),
        ),
    ]
