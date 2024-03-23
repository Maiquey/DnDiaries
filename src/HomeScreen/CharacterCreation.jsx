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

    render(){
        const {array} = this.state;

        return(

            <div>
                <button onClick={() => console.log("hi from char screen")}>Welcome to character creation!</button>
                <br />
                <Link to="/">home</Link>
                <br />
                <Link to="/character">char</Link>
            </div>
            
        );
    }
}