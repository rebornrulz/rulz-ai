# RULZ-AI

Rulz-AI is a personal project cloned from Chatbot-UI. Not contribute to any project.

See a [demo](https://twitter.com/i/status/1659354052029997056).

![Chatbot UI](./public/page.png)

## Updates
### New

## Getting Started

## Deploy

**Vercel**

Host your own live version of Chatbot UI with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frebornrulz%2Frulz-ai)

#### Prerequisites:
1. [Download and install Python](https://www.python.org/downloads/) (Version 3.x is recommended).

##### Install using pypi
```
pip install -U g4f
```

##### or

1. Clone the GitHub repository: 
```
git clone https://github.com/rebornrulz/rulz-ai.git
```
2. Navigate to the project directory:
```
cd rulz-ai
```
3. (Recommended) Create a virtual environment to manage Python packages for your project:
```
python3 -m venv venv
```
4. Activate the virtual environment:
   - On Windows:
   ```
   .\venv\Scripts\activate
   ```
   - On macOS and Linux:
   ```
   source venv/bin/activate
   ```
5. Install the required Python packages from `requirements.txt`:
```
pip install -r requirements.txt
```

6. Create a `test.py` file in the root folder and start using the repo, further Instructions are below
```py
import g4f
...
```

## Usage

### The `g4f` Package
```py
import g4f

...
```

## Usage

### The `g4f` Package
```py
import g4f


print(g4f.Provider.Ails.params)  # supported args

# Automatic selection of provider

# streamed completion
response = g4f.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Hello world"}],
    stream=True,
)

for message in response:
    print(message, flush=True, end='')

# normal response
response = g4f.ChatCompletion.create(
    model=g4f.models.gpt_4,
    messages=[{"role": "user", "content": "hi"}],
)  # alterative model setting

print(response)


# Set with provider
response = g4f.ChatCompletion.create(
    model="gpt-3.5-turbo",
    provider=g4f.Provider.DeepAi,
    messages=[{"role": "user", "content": "Hello world"}],
    stream=True,
)

for message in response:
    print(message)
```

providers:
```py
from g4f.Provider import (
    Acytoo,
    Aichat,
    Ails,
    AiService,
    AItianhu,
    Bard,
    Bing,
    ChatgptAi,
    ChatgptLogin,
    DeepAi,
    GetGpt
)


# usage:
response = g4f.ChatCompletion.create(..., provider=ProviderName)
```

You should be able to start chatting.

If you do not provide an OpenAI API key with `OPENAI_API_KEY`, users will have to provide their own key.

If you don't have an OpenAI API key, you can get one [here](https://platform.openai.com/account/api-keys).

[GCSE]: https://developers.google.com/custom-search/v1/overview
