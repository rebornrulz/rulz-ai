import requests chats
import json
import os

API_TOKEN = os.environ.get('SUPERAGI_API_KEY')

api_url = 'https://api.superagi.com/v1/chat/65437cbf227a4018516ad1ce'

request_data = {
    "system_prompt": "You are a helpful AI assistant",
    "messages": 
    [
        {
            "role": "user",
            "content":"Can you help me to write code for a game"
        },
        {
            "role": "assistant",
            "content": "Of course! I'd be happy to help you write code for a game. Can you provide more details about the game you want to create?"
        },
        {
            "role": "user",
            "content": "I need code for a tic-tac-toe game"
        }
    ],
    "max_tokens": 100,
    "temperature": 0.9,
    "top_p": 0.1,
    "repetition_penalty": 0,
    "best_of": 1,
    "top_k": 10,
    "stream": false
}

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {API_TOKEN}',
}

try:
    response = requests.post(api_url, data=json.dumps(request_data), headers=headers)
    response_data = response.json()
    generated_reply = response_data
    print('Generated reply:', generated_reply)
except Exception as e:
    print('Error:', str(e))