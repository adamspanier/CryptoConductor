# base image
FROM python:3

# Working directory
ENV DockerHOME=/usr/src/app

# set the working directory
RUN mkdir -p $DockerHOME

# Where code is in the container
WORKDIR $DockerHOME

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies here
RUN pip install --upgrade pip
RUN python -m pip install Django
RUN python -m pip install djangorestframework
RUN python -m pip install djangorestframework-jsonapi
RUN python -m pip install djangorestframework-jsonapi['django-filter']

# copy whole project to your docker home directory.
COPY . $DockerHOME

# run this command to install all dependencies
RUN pip install -r source/requirements.txt

# port where the Django app runs
EXPOSE 8000

# start server
# CMD python source/manage.py runserver
