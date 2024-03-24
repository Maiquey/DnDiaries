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
        // Implement local storage saving logic here
        console.log(characterData);
    };

    render() {
        return (
            <div>
                <button onClick={() => console.log("hi from char screen")}>Welcome to character creation!</button>
                <br />
                <Link to="/">home</Link>
                <br />
                <Link to="/character">char</Link>
                <h1>Welcome to character creation!</h1>
                <form onSubmit={this.saveCharacter}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Gender: </label>
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
                    <div>
                        <label>Weight: </label>
                        <input type="text" name="weight" />
                    </div>
                    <div>
                        <label>Hair Color: </label>
                        <input type="text" name="hair-color" />
                    </div>
                    <div>
                        <label>Height: </label>
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
                    <button type="submit">Save</button>
                </form>
                <br />
            </div>
        );
    }
}