import React from "react";
import './HomeScreen.css';
import { Link } from "react-router-dom";

export default class CharacterScreen extends React.Component{
    constructor(props){
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
            <div>
                <button onClick={() => console.log("hi from char screen")}>Welcome to character creation!</button>
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/character">Character</Link>
                <h1>Welcome to character creation!</h1>
                <form onSubmit={this.saveCharacter}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" required />
                    </div>
                    <div>
                        <label>Gender: </label>
                        <input type="text" name="gender" required />
                    </div>
                    <div>
                        <label>Age: </label>
                        <input type="text" name="age" required />
                    </div>
                    <div>
                        <label>Race: </label>
                        <input type="text" name="race" required />
                    </div>
                    <div>
                        <label>Class: </label>
                        <input type="text" name="class" required />
                    </div>
                    <div>
                        <label>Weight: </label>
                        <input type="text" name="weight" required />
                    </div>
                    <div>
                        <label>Hair Color: </label>
                        <input type="text" name="hairColor" required />
                    </div>
                    <div>
                        <label>Height: </label>
                        <input type="text" name="height" required />
                    </div>
                    <div>
                        <label>Skin Color: </label>
                        <input type="text" name="skinColor" required />
                    </div>
                    <div>
                        <label>Clothing: </label>
                        <input type="text" name="clothing" required />
                    </div>
                    <div>
                        <label>Weapon: </label>
                        <input type="text" name="weapon" required />
                    </div>
                    <button type="submit">Save</button>
                </form>
                <br />
            </div>
        );
    }
}