!#/bin/bash

	cd source/
		sudo apt install python3-pip
		python3 -m pip install Django
		python3 -m pip install djangorestframework
		python3 -m pip install djangorestframework-jsonapi
		python3 -m pip install djangorestframework-jsonapi['django-filter']
		python3 manage.py makemigrations
		python3 manage.py migrate
		python3 manage.py createsuperuser
		python3 manage.py runserver
