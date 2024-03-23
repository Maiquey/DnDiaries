import React, { useState } from "react";
import axios from "axios";
import './ImageCreation.css';

export default function ImageCreation() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateImage = () => {
    axios
      .post("http://localhost:5000/generate", { prompt })
      .then((response) => {
        setImageUrl(response.data.image_url);
        setError("");
      })
      .catch((error) => {
        setError("Failed to generate image.");
        console.error("Error generating image:", error);
      });
  };

  return (
    <div className="image-creation">
      <h1>DALL·E Image Generation</h1>
      <div className="input-container">
        <label htmlFor="prompt">Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter your prompt..."
        />
        <button onClick={generateImage}>Generate Image</button>
      </div>
      {imageUrl && (
        <div className="image-container">
          <h2>Generated Image:</h2>
          <img src={imageUrl} alt="Generated" />
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}