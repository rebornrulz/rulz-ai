FROM python:3.9-slim

# Install dependencies
RUN pip install transformers torch

# Set working directory
WORKDIR /app

# Copy Rulz-AI code into the container
COPY . /app

# Set the entry point
ENTRYPOINT ["python", "dev.Dockerfile.py"]