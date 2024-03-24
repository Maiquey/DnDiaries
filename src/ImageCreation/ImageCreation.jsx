import React, { useState } from "react";
import axios from "axios";
import './ImageCreation.css';

export default function ImageCreation() {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const generateImage = () => {
    axios
      .post("http://localhost:5000/generate", { prompt })
      .then((response) => {
        setImageUrl(response.data.image_url);
        setError("");
        saveToLocalStorage(prompt, title, response.data.image_url); // Save to local storage
      })
      .catch((error) => {
        setError("Failed to generate image.");
        console.error("Error generating image:", error);
      });
  };

  const saveToLocalStorage = (prompt, title, imageUrl) => {
    let savedData = localStorage.getItem('savedImageData');
    if (!savedData) {
      savedData = [];
    } else {
      savedData = JSON.parse(savedData);
    }

    savedData.push({ prompt, title, imageUrl });
    localStorage.setItem('savedImageData', JSON.stringify(savedData));
  };

  return (
    <div className="image-creation">
      <h1>DALL·E Image Generation</h1>
      <div className="input-container">
      <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter the title..."
        />
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