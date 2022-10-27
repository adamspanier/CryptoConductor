!#/bin/bash

	git clone https://github.com/adamspanier/CryptoConductor.git
	cd CryptoConductor/source/
    python3 manage.py makemigrations
    python3 manage.py migrate
    python3 manage.py createsuperuser


