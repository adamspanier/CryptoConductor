!#/bin/bash

	cd CryptoConductor/source/
    python3 manage.py makemigrations
    python3 manage.py migrate
    python3 manage.py createsuperuser

