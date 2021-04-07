FROM amazonlinux:2.0.20210219.0

WORKDIR /home

# Make sure we're up-to-date
RUN yum update -y

# Download deps
RUN yum install -y git python3.x86_64 gcc python3-devel

# Setup virtual envs
COPY envs ./envs
WORKDIR /home/envs
RUN chmod +x ./install.sh
RUN ./install.sh

# Setup API
WORKDIR /home
COPY api ./api
WORKDIR /home/api

# Install requirements
RUN pip3 install gunicorn
RUN pip3 install -r requirements.txt

# Start the API
CMD gunicorn --bind 0.0.0.0:$PORT app:app
