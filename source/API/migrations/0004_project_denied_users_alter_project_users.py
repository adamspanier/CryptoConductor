# Generated by Django 4.1.1 on 2022-12-01 22:59

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('API', '0003_project_niches'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='denied_users',
            field=models.ManyToManyField(related_name='denials', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='project',
            name='users',
            field=models.ManyToManyField(related_name='users', to=settings.AUTH_USER_MODEL),
        ),
    ]
