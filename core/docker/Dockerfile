FROM amazonlinux:2.0.20210219.0

WORKDIR /home

# Make sure we're up-to-date
RUN yum update -y

# Download deps
RUN yum install -y python3.x86_64 gcc python3-devel

# Copy dist
COPY dist ./dist
WORKDIR /home/dist

# Install requirements
RUN pip3 install gunicorn

# Setup virtual envs
WORKDIR /home/dist/envs
RUN chmod +x ./install.sh
RUN ./install.sh

# Setup API
WORKDIR /home
COPY api ./api
WORKDIR /home/api
RUN pip3 install -r requirements.txt

# Start the API
ENTRYPOINT gunicorn --bind 0.0.0.0:5000 app:app
