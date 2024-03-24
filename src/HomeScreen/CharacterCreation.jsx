import React from "react";
import './HomeScreen.css';
import { Link } from "react-router-dom";
import bgImage from '../Assets/oldpaper.jpg'
import '../Assets/Fonts/fonts.css'

export default class CharacterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state variables go here
        };
    }

    saveCharacter = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const characterData = Object.fromEntries(formData.entries());
        
        // Save character data to localStorage
        let savedCharacters = localStorage.getItem('savedCharacters');
        if (!savedCharacters) {
            savedCharacters = [];
        } else {
            savedCharacters = JSON.parse(savedCharacters);
        }

        savedCharacters.push(characterData);
        localStorage.setItem('savedCharacters', JSON.stringify(savedCharacters));

        // Clear the form after saving
        event.target.reset();

        console.log("Character saved:", characterData);       
    };

    render() {
        return (
            <div className="bg2" style={{ backgroundImage: `url(${bgImage})`}}>
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/character">char</Link>
                <h1 style={{fontFamily: 'vinque'}}>Welcome to character creation!</h1>
                <form onSubmit={this.saveCharacter} className="character-form" style={{fontFamily: 'cupandtalon', fontSize: 24}}>
                    <div className="form-column">
                        <div>
                            <label>Name: </label>
                            <input type="text" name="name" required/>
                        </div>
                        <div>
                            <label>Gender (male/female/non-binary): </label>
                            <input type="text" name="gender" required/>
                        </div>
                        <div>
                            <label>Age: </label>
                            <input type="text" name="age" required/>
                        </div>
                        <div>
                            <label>Race: </label>
                            <input type="text" name="race" required/>
                        </div>
                        <div>
                            <label>Class: </label>
                            <input type="text" name="class" required/>
                        </div>
                    </div>
                    <div className="form-column">
                        <div>
                            <label>Weight (kg): </label>
                            <input type="text" name="weight" required/>
                        </div>
                        <div>
                            <label>Hair Color: </label>
                            <input type="text" name="hair-color" required/>
                        </div>
                        <div>
                            <label>Height (cm): </label>
                            <input type="text" name="height" required/>
                        </div>
                        <div>
                            <label>Skin Color: </label>
                            <input type="text" name="skin-color" required/>
                        </div>
                        <div>
                            <label>Clothing: </label>
                            <input type="text" name="clothing" required/>
                        </div>
                        <div>
                            <label>Weapon: </label>
                            <input type="text" name="weapon" required/>
                        </div>
                    </div>
                </form>
                <button type="submit">Save</button>
                <br />
            </div>
        );
    }
}