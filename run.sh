!#/bin/bash

	cd source/
		python -m pip install Django
		python -m pip install djangorestframework
		python -m pip install djangorestframework-jsonapi
		python -m pip install djangorestframework-jsonapi['django-filter']
		python manage.py makemigrations
		python manage.py migrate
		python manage.py createsuperuser
		python manage.py runserver
