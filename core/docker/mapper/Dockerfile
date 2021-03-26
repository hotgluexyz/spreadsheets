FROM python:alpine

# Copy the API in
COPY ../../api /api

# Switch to api directory
WORKDIR /api

# Install API requirements
RUN pip install -r requirements.txt

# Start the API
ENTRYPOINT python -m flask run
