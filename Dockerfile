FROM python:3.9-slim

# Install dependencies
RUN pip install transformers torch

# Set working directory
WORKDIR /app

# Copy Python scripts into the container
COPY Dockerfile.python /app
COPY dev.Dockerfile.py /app

# Set the entry point
ENTRYPOINT ["python", "Dockerfile.python", "dev.Dockerfile.py"]