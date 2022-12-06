!#/bin/bash

	cd source/
		python3 -m pip install Django
		python3 -m pip install djangorestframework
		python3 -m pip install djangorestframework-jsonapi
		python3 -m pip install djangorestframework-jsonapi['django-filter']
		python3 manage.py makemigrations
		python3 manage.py migrate
		python3 manage.py createsuperuser
		python3 manage.py runserver
