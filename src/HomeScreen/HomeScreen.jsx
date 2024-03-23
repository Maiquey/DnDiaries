    import React from "react";
    import Modal from '../Components/Modal/Modal.js'
    import './HomeScreen.css';
    import bgImage from '../Assets/openbook.jpg'
    import bmIcon from '../Assets/icons8-bookmark-192-removebg-preview.png'
    import inkIcon from '../Assets/icons8-ink-50.png'
    import { Link } from "react-router-dom";

    export default class HomeScreen extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
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
    
        render() {
            const { isModalOpen, modalContentType } = this.state;
    
            return (
                <div className="bg" style={{ backgroundImage: `url(${bgImage})`, paddingTop: '50px' }}>
                    <Modal isOpen={isModalOpen} toggleModal={this.toggleModal} contentType={modalContentType}></Modal>
                    <button className="bookmark" onClick={() => this.openModalWithContent('bookmark')} style={{ backgroundImage: `url(${bmIcon})` }}>
                    </button>
                    <button className="newEntryButton" style={{ backgroundImage: `url(${inkIcon})` }}>
                    </button>
                    <br />
                    <Link to="/">home</Link>
                    <br />
                    <Link to="/character" className="button-like-link">char</Link>
                </div>
            );
        }
    }