FROM python:3.11.5

# Install dependencies
RUN pip install transformers torch

# Set working directory
WORKDIR /app

# Copy setup.py into the container
COPY setup.py /app

# Set the entry point
ENTRYPOINT ["python", "setup.py"]