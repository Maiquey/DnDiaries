import React, { useState, useEffect} from "react";
import axios from "axios";
import './ImageCreation.css';

export default function ImageCreation() {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [savedCharacterData, setCharacterData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedCharacterData = localStorage.getItem('savedCharacters');
    if (savedCharacterData) {
      setCharacterData(JSON.parse(savedCharacterData));
    }
  }, []);

  const generateCharacterStrings = (characters) => {
    return characters.map(character => {
      return `${character.name} is a ${character.age} year old ${character.gender} ${character.race} ${character.classType} with ${character.hairColor} hair and ${character.skinColor} skin. They weigh ${character.weight} kg and are ${character.height} cm tall. They are wearing ${character.clothing} and is wielding a ${character.weapon}.`;
    });
  };


  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

const characterStrings = generateCharacterStrings(savedCharacterData);
  // Append the character strings to the prompt
const fullPrompt = `${characterStrings.join(' ')}${prompt}`;

  const generateImage = () => {
    console.log("Full prompt:", fullPrompt);
    axios
      .post("http://localhost:5000/generate", { fullPrompt })
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