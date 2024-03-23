import React from "react";
import './HomeScreen.css';

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //state variables go here
            inputValue: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
        // Save the value to local storage
        localStorage.setItem('textInput', event.target.value);
    }

    componentDidMount() {
        // Load the value from local storage when the component mounts
        const savedValue = localStorage.getItem('textInput');
        if (savedValue) {
            this.setState({ inputValue: savedValue });
        }
    }

    render(){
        const { inputValue } = this.state;

        return(
            <div className="helloMsg">
                {/* Text box */}
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={this.handleInputChange} 
                    placeholder="Type something..."
                />
                {/* Button */}
                <button onClick={() => console.log(inputValue)}>The Button</button>
            </div>
        );
    }
}