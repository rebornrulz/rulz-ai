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

#### Install using pip:
```
docker build -t rulz-ai-image .
```
```
docker run -it rulz-ai-image
```
```
pip install -U g4f
```
```
pip install -r requirements.txt
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

# usage:

You should be able to start chatting.

If you do not provide an OpenAI API key with `OPENAI_API_KEY`, users will have to provide their own key.

If you don't have an OpenAI API key, you can get one [here](https://platform.openai.com/account/api-keys).

[GCSE]: https://developers.google.com/custom-search/v1/overview
