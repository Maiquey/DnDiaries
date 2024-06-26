import React from 'react';
import Modal from '../Components/Modal/Modal.js'
import './HomeScreen.css';
import bgImage from '../Assets/openbook.jpg'
import bmIcon from '../Assets/icons8-bookmark-192-removebg-preview.png'
import inkIcon from '../Assets/icons8-ink-50.png'
import { Link } from "react-router-dom";
import logo from '../Assets/logo_dndiaries_1-removebg.png'


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedData: [],
            isModalOpen: false,
            modalContentType: '', // Add state to control modal content type
        };
    }

    openModalWithContent = (contentType) => { // Function to open modal with specific content
        this.setState({
            isModalOpen: true,
            modalContentType: contentType,
        });
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }));
    }

    componentDidMount() {
        const data = localStorage.getItem('savedJournalEntries');
        if (data) {
          this.setState({ savedData: JSON.parse(data) });
        }
      }

    handleClick(item) {
        console.log(item);
    }

    deleteJournal = (index) => {
        // Create a new array without the journal entry at the given index
        const newSavedData = [...this.state.savedData];
        newSavedData.splice(index, 1);
      
        // Update the state and the local storage
        this.setState({ savedData: newSavedData });
        localStorage.setItem('savedJournalEntries', JSON.stringify(newSavedData));
      };

    render() {
        const { savedData, isModalOpen, modalContentType } = this.state;
        
        // <Link to="/character" className="addPC">
        //       <img src={dice} alt="Dice Image" />
        //       <span className="overlay-text">NEW</span>
        //     </Link>
        return (
            <div className="bg" style={{ backgroundImage: `url(${bgImage})`, paddingTop: '10em' }}>
                <button className="bookmark" onClick={() => this.openModalWithContent('bookmark')} style={{ backgroundImage: `url(${bmIcon})` }}>
                </button>
                <Link to="/ImageCreation" className="newEntryButton">
                    <img src={inkIcon} alt="Ink Pot" />
                </Link>
                <img className='logo' src={logo} alt="Logo"  />

                <div className="wholepage">
                <ul>
                {savedData.map((item, index) => (
                    <div key={index} onClick={() => this.handleClick(item)} className="wholepage-item">
                    <strong>Title:</strong> {item.title}<br />
                    <img src={item.imageUrl} alt={`Generated ${index}`} />
                    <button onClick={() => this.deleteJournal(index)}>Delete</button>
                    </div>
                ))}
                </ul>
                </div>
                <Modal isOpen={isModalOpen} toggleModal={this.toggleModal} contentType={modalContentType}></Modal>
                </div>
        );
    }
}