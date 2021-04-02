FROM amazonlinux:2.0.20210219.0

WORKDIR /home

# Make sure we're up-to-date
RUN yum update -y

# Download deps
RUN yum install -y python3.x86_64 gcc python3-devel

# Setup virtual envs
COPY envs ./envs
WORKDIR /home/envs
RUN chmod +x ./install.sh
RUN ./install.sh

WORKDIR /home

# Setup API
COPY dist ./dist
WORKDIR /home/dist
RUN pip3 install gluestick_api-0.0.1-py3-none-any.whl waitress
RUN pip3 install -r requirements.txt

# Start the API
WORKDIR /home
ENTRYPOINT waitress-serve --call 'gluestick_api:create_app'
