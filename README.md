# RULZ-AI

## Getting Started

## Deploy

**Vercel**

Host your own live version of Chatbot UI with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frebornrulz%2Frulz-ai)

#### Prerequisites:
1. [Download and install Python](https://www.python.org/downloads/) (Version 3.x is recommended).
```
python3 setup.py install
```

#### Build Docker Images
```
docker build -t rulz-ai .
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 rulz-ai
```
```
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 ghcr.io/rebornrulz/rulz-ai
```
```
docker run -it rulz-ai
```
```
docker-compose up
```

### Instal Using pip
```
pip install -U g4f
```
```
pip install -r requirements.txt
```
```
pip install -e .
```

### Install using git:
```
npm ci
```
```
npm run build
```

### Run Locally:
```
npm run dev
```

# NOAA Real-Time Mesoscale Analysis (RTMA)
## Stream data with DDA:
```
from dagshub.streaming import DagsHubFilesystem

fs = DagsHubFilesystem(".", repo_url="https://dagshub.com/DagsHub-Datasets/noaa-rtma-dataset")

fs.listdir("s3://noaa-rtma-pds")
```
