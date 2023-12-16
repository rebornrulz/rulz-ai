import requests

def get_weather(location, unit="c"):
    api_key = "YOUR_API_KEY"  # Replace with your own API key
    base_url = "http://api.weatherapi.com/v1/current.json"
    
    params = {
        "key": api_key,
        "q": location,
        "unit": unit
    }
    
    response = requests.get(base_url, params=params)
    data = response.json()
    
    return data