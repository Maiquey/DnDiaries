import React from "react";
import './HomeScreen.css';

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //state variables go here
        };
    }

    render(){
        const {array} = this.state;

        return(

            <div className="helloMsg">
                <button onClick={() => console.log("hello!")}>hello world!</button>
            </div>
        );
    }
}