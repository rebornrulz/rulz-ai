import http.client

conn = http.client.HTTPSConnection("rulz.us.auth0.com")

payload = "{\"client_id\":\"omZpgZp5eJfs9WmSmqO9BZVQkqFFMnHh\",\"client_secret\":\"nbjIQeAuKgVEe3Dksgbg6tIzS0vPoSS3yM3dPUqEWdRj32En3JrZGIftAZRU_4HA\",\"audience\":\"https://rulz.us.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/oauth/token", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))