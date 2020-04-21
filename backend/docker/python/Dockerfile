FROM python:3.7

MAINTAINER paulakraszewska

ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
COPY cards_api /app
RUN pip install -r requirements.txt
ENV AM_I_IN_A_DOCKER_CONTAINER Yes
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
