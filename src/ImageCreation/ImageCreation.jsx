import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bgImage from '../Assets/oldpaper.jpg'
import '../Assets/Fonts/fonts.css'
import './ImageCreation.css';

export default class ImageCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      prompt: "",
      imageUrl: "",
      error: "",
      savedData: [],
    };
  }

  componentDidMount() {
    const data = localStorage.getItem('savedCharacters');
    if (data) {
      this.setState({ savedData: JSON.parse(data) });
    }
  }

  generateCharacterStrings = () => {
    return this.state.savedData.map(character => {
      return `${character.name} is a ${character.age} year old ${character.gender} ${character.race} ${character.classType} with ${character.hairColor} hair and ${character.skinColor} skin. They weigh ${character.weight} kg and are ${character.height} cm tall. They are wearing ${character.clothing} and is wielding a ${character.weapon}.`;
    });
  };

  handlePromptChange = (e) => {
    this.setState({ prompt: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  generateImage = () => {
    const { prompt, title } = this.state;
    const characterStrings = this.generateCharacterStrings();
    const fullPrompt = `${characterStrings.join(' ')}${prompt}`;

    console.log(fullPrompt)
    axios
      .post("http://localhost:5000/generate", { fullPrompt })
      .then((response) => {
        this.setState({ imageUrl: response.data.image_url, error: "" });
        this.saveToLocalStorage(prompt, title, response.data.image_url); // Save to local storage
      })
      .catch((error) => {
        this.setState({ error: "Failed to generate image." });
        console.error("Error generating image:", error);
      });
  };

  saveToLocalStorage = (prompt, title, imageUrl) => {
    let savedData = localStorage.getItem('savedJournalEntries');
    if (!savedData) {
      savedData = [];
    } else {
      savedData = JSON.parse(savedData);
    }

    savedData.push({ prompt, title, imageUrl });
    localStorage.setItem('savedJournalEntries', JSON.stringify(savedData));
    console.log(localStorage)
  };

  render() {
    const { title, prompt, imageUrl, error, savedData} = this.state;
    return (
      <div className="background-container" style={{ backgroundImage: `url(${bgImage})`}}>
        <div className="image-creation">
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/character">Char</Link>
        <h1 style={{fontFamily: 'vinque'}}>Welcome to Journal Entry</h1>
        <div className="input-container" style={{fontFamily: 'cupandtalon', fontSize: 24}}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleTitleChange}
            placeholder="Enter the title..."
          />
          <label htmlFor="prompt">Description:</label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={this.handlePromptChange}
            placeholder="Enter your prompt..."
          />
          <button onClick={this.generateImage}>Generate Image</button>
        </div>
        {imageUrl && (
          <div className="image-container">
            <h2>Generated Image:</h2>
            <img src={imageUrl} alt="Generated" />
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </div>
      </div>
      
    );
  }
}