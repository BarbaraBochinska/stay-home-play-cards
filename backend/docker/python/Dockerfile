FROM python:3.7-alpine
MAINTAINER paulakraszewska

ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY . /code/