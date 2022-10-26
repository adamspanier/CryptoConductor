# Generated by Django 4.1.1 on 2022-10-26 18:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Specialty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('description', models.CharField(max_length=500, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Niche',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('description', models.CharField(max_length=500)),
                ('specialty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.specialty')),
            ],
        ),
    ]