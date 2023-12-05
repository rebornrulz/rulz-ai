# RULZ-AI

## Getting Started

## Deploy

**Vercel**

Host your own live version of Rulz-AI with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frebornrulz%2Frulz-ai)

#### Prerequisites:
1. [Download and install Python](https://www.python.org/downloads/) (Version 3.x is recommended).
```
python3 setup.py install
```

#### Build Docker Images
```
docker-compose up
```

### Instal Using pip
```
pip3 install -U g4f
```
```
pip3 install -r requirements.txt
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

### Install Plugin

To run the plugin, enter the following command:

```bash
python main.py
```

Once the local server is running:

1. Navigate to https://rulz-ai.com. 
2. In the Model drop down, select "Plugins" (note, if you don't see it there, you don't have access yet).
3. Select "Plugin store"
4. Select "Develop your own plugin"
5. Enter in `localhost:5003` since this is the URL the server is running on locally, then select "Find manifest file".

The plugin should now be installed and enabled! You can start with a question like "What is on my todo list" and then try adding something to it as well! 