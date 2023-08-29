import g4f

# Automatic selection of provider

# Streamed completion
response = g4f.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Hello world"}],
    stream=True,
)

for message in response:
    print(message, flush=True, end='')

# Normal response
response = g4f.ChatCompletion.create(
    model=g4f.models.gpt_4,
    messages=[{"role": "user", "content": "hi"}],
)  # alternative model setting

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
