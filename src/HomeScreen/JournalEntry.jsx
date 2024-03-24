import React from "react";
import './HomeScreen.css';
import { Link } from "react-router-dom";
import bgImage from '../Assets/oldpaper.jpg'
import '../Assets/Fonts/fonts.css'

export default class JournalEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //state variables go here
        };
    }
    
    saveCharacter = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const journalData = Object.fromEntries(formData.entries());
        // Implement local storage saving logic here
        console.log(journalData);
    };

    render() {
        return (
            <div className="bg2" style={{ backgroundImage: `url(${bgImage})`}}>
                <br />
                <Link to="/">home</Link>
                <br />
                <Link to="/character">char</Link>
                <h1 style={{fontFamily: 'vinque'}}>Welcome to Journal Entry!</h1>
                <form onSubmit={this.saveCharacter} style={{fontFamily: 'cupandtalon', fontSize: 24}}>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea name="description" rows="5" style={{ width: '100%', fontFamily: 'cupandtalon', fontSize: 24 }}></textarea>
                    </div>
                    <button type="submit">Save</button>
                </form>
                <br />
            </div>
        );
    }
}