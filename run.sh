!#/bin/bash

	cd lssource/
    python3 manage.py makemigrations
    python3 manage.py migrate
    python3 manage.py createsuperuser


