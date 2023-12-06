FROM alpine:3.14

# Update and install system dependencies
RUN apk add --no-cache mysql-client && \
    apt-get update && apt-get upgrade -y && \
    apt-get install -y libgl1-mesa-dev

# Install Python packages for data processing
RUN pip3 install numpy==1.24.3 \
    pandas==1.5.3 \
    matplotlib==3.7.1 \
    pillow==9.5.0 \
    opencv-python-headless==4.7.0.72 \
    requests==2.30.0 \
    beautifulsoup4==4.12.2

# Install additional Python packages
RUN pip3 install transformers torch

# Set working directory
WORKDIR /app

# Copy setup.py into the container
COPY setup.py /app

# Set the entry point
ENTRYPOINT ["python", "setup.py", "script.py","mysql"]
