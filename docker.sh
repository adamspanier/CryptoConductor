#!/bin/bash

	sudo apt install docker
	sudo apt install docker.io
	sudo pip install docker-compose
	sudo docker compose down
	sudo docker compose build
	sudo docker compose up
