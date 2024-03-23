const express = require('express');
const cors = require('cors');
const fs = require('fs');
const request = require('request');

const app = express();
app.use(express.json());
app.use(cors());

function loadApiKey() {
    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    return config.API_KEY;
}

// DALL·E API Endpoint
const API_URL = "https://api.openai.com/v1/images/generations";
const API_KEY = loadApiKey();

// Generate Image Function
function generateImage(prompt) {
    const options = {
        url: API_URL,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        json: {
            "model": "dall-e-3",
            "prompt": prompt,
            "n": 1,
            "size": "1024x1024"
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const image_url = body.data[0].url;
                resolve(image_url);
            } else {
                reject(error);
            }
        });
    });
}

// API Endpoint for Image Generation
app.post('/generate', async (req, res) => {
    const prompt = req.body.prompt || '';
    if (!prompt) {
        return res.status(400).json({ 'error': 'Prompt is required' });
    }

    try {
        const imageUrl = await generateImage(prompt);
        if (imageUrl) {
            return res.status(200).json({ 'image_url': imageUrl });
        } else {
            return res.status(500).json({ 'error': 'Failed to generate image' });
        }
    } catch (error) {
        return res.status(500).json({ 'error': error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
