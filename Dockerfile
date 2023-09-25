FROM python:3.11.5

# Update and install system dependencies
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y libgl1-mesa-dev

# Install Python packages for data processing
RUN pip install numpy==1.24.3 \
    pandas==1.5.3 \
    matplotlib==3.7.1 \
    pillow==9.5.0 \
    opencv-python-headless==4.7.0.72 \
    requests==2.30.0 \
    beautifulsoup4==4.12.2

# Install additional Python packages
RUN pip install transformers torch

# Set working directory
WORKDIR /app

# Copy setup.py into the container
COPY setup.py /app

# Set the entry point
ENTRYPOINT ["python", "setup.py"]