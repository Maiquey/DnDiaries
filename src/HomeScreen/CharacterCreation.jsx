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
        // Implement local storage saving logic here
        console.log(characterData);
    };

    render() {
        return (
            <div className="bg2" style={{ backgroundImage: `url(${bgImage})`}}>
                <br />
                <Link to="/">home</Link>
                <br />
                <Link to="/character">char</Link>
                <h1 style={{fontFamily: 'vinque'}}>Welcome to character creation!</h1>
                <form onSubmit={this.saveCharacter} className="character-form" style={{fontFamily: 'cupandtalon', fontSize: 24}}>
                    <div className="form-column">
                        <div>
                            <label>Name: </label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Gender (male/female/non-binary): </label>
                            <input type="text" name="gender" />
                        </div>
                        <div>
                            <label>Age: </label>
                            <input type="text" name="age" />
                        </div>
                        <div>
                            <label>Race: </label>
                            <input type="text" name="race" />
                        </div>
                        <div>
                            <label>Class: </label>
                            <input type="text" name="class" />
                        </div>
                    </div>
                    <div className="form-column">
                        <div>
                            <label>Weight (kg): </label>
                            <input type="text" name="weight" />
                        </div>
                        <div>
                            <label>Hair Color: </label>
                            <input type="text" name="hair-color" />
                        </div>
                        <div>
                            <label>Height (cm): </label>
                            <input type="text" name="height" />
                        </div>
                        <div>
                            <label>Skin Color: </label>
                            <input type="text" name="skin-color" />
                        </div>
                        <div>
                            <label>Clothing: </label>
                            <input type="text" name="clothing" />
                        </div>
                        <div>
                            <label>Weapon: </label>
                            <input type="text" name="weapon" />
                        </div>
                    </div>
                </form>
                <button type="submit">Save</button>
                <br />
            </div>
        );
    }
}