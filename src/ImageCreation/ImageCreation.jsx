import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bgImage from '../Assets/oldpaper.jpg'
import '../Assets/Fonts/fonts.css'
import './ImageCreation.css';

class ImageCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      prompt: "",
      imageUrl: "",
      error: ""
    };
  }

  handlePromptChange = (e) => {
    this.setState({ prompt: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  generateImage = () => {
    const { prompt, title } = this.state;
    axios
      .post("http://localhost:5000/generate", { prompt })
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
    const { title, prompt, imageUrl, error } = this.state;
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

export default ImageCreation;