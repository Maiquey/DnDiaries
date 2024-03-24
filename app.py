from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

def load_api_key():
    with open('config.json') as config_file:
        config = json.load(config_file)
        # awful awful awful never do this
        # but its a hackathon so we're being silly 
        api_key = config.get('API_KEY_1') + config.get('API_KEY_2')
        print("printing api key!!")
        print(api_key)
        return api_key

# DALL·E API Endpoint
API_URL = "https://api.openai.com/v1/images/generations"

API_KEY = load_api_key()

# Generate Image Function
def generate_image(prompt):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    data = {
        "model": "dall-e-3",
        "prompt": prompt,
        "n": 1,
        "size": "1024x1024"
    }
    response = requests.post(API_URL, headers=headers, json=data)
    if response.status_code == 200:
        result = response.json()
        image_url = result['data'][0]['url']
        return image_url
    else:
        return None

# API Endpoint for Image Generation
@app.route('/generate', methods=['POST'])
def generate():
    request_data = request.get_json()
    prompt = request_data.get('prompt', '')
    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    image_url = generate_image(prompt)
    if image_url:
        return jsonify({'image_url': image_url}), 200
    else:
        return jsonify({'error': 'Failed to generate image'}), 500

if __name__ == '__main__':
    app.run(debug=True)
