import React from "react";
import './HomeScreen.css';
import { Link } from "react-router-dom";

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //state variables go here
        };
    }

    render(){
        const {array} = this.state;

        return (
            <div>
                <h1>Home Page</h1>
                <br />
                <div className="helloMsg">
                    <button onClick={() => console.log("hello from home screen")}>Welcome to home screen!</button>
                </div>
                <Link to="/">home</Link>
                <br />
                <Link to="/character" className="button-like-link">char</Link>
            </div>
        );
    }
}