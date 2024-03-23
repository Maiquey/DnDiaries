    import React from "react";
    import './HomeScreen.css';
    import bgImage from '../Assets/openbook.jpg'
    import bmIcon from '../Assets/icons8-bookmark-192-removebg-preview.png'
    import inkIcon from '../Assets/icons8-ink-50.png'

    export default class HomeScreen extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                //state variables go here
                // journalEntries: Array.from({length: 5}, () => '') // 5 empty strings
            };
        }

        // handleJournalEntryChange = (index, event) => {
        //     const { journalEntries } = this.state;
        //     const updatedEntries = [...journalEntries];
        //     updatedEntries[index] = event.target.value;
        //     this.setState({ journalEntries: updatedEntries });
        // }

        handleClick() { 
            // this.setState(prevState => ({
            //     isToggleOn: !prevState.isToggleOn    
            // }));  
        }
        
        render(){
            const { journalEntries } = this.state; // state vars here, make array of journal entries.

            return (
                <div className="bg" style={{ backgroundImage: `url(${bgImage})`, paddingTop: '50px' }}>
                    {/* <div className="journal-entries">
                        {journalEntries.map((entry, index) => (
                            <div key={index} className="journal-entry">
                                <h3>Journal Entry {index + 1}</h3>
                                <textarea
                                    value={entry}
                                    onChange={(event) => this.handleJournalEntryChange(index, event)}
                                    placeholder={`Journal entry ${index + 1}`}
                                    rows={10}
                                    cols={50}
                                />
                            </div>
                        ))}
                    </div> */}
                    <button className="bookmark" onClick={ this.handleClick } style={{ backgroundImage: `url(${bmIcon})` }}>
                    </button>
                    <button className="newEntryButton" onClick={ this.handleClick } style={{ backgroundImage: `url(${inkIcon})` }}>
                    </button>
                </div>
            );
        }
    }