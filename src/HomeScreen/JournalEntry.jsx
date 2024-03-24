import React from "react";
import './HomeScreen.css';
import { Link } from "react-router-dom";

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
            <div>
                <br />
                <Link to="/">home</Link>
                <br />
                <Link to="/character">char</Link>
                <h1>Welcome to Journal Entry!</h1>
                <form onSubmit={this.saveCharacter}>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type="text" name="description" />
                    </div>
                    <button type="submit">Save</button>
                </form>
                <br />
            </div>
        );
    }
}