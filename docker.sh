#!/bin/bash

	#sudo docker build . -t docker-django-v0.0
	#sudo docker run docker-django-v0.0
	sudo docker compose down
	sudo docker compose build
	sudo docker compose up