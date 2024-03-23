import React, { useState } from 'react';
// import HomeScreen from './HomeScreen/HomeScreen.jsx';
import './Modal.css';
export default function Modal({ isOpen, toggleModal, contentType }) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            {contentType === 'bookmark' && (
              <>
                <h2>Bookmark Modal</h2>
                <p>This is the content for the bookmark modal.</p>
              </>
            )}
            {/* {contentType === 'inkIcon' && (
              <>
                <h2>Ink Icon Modal</h2>
                <p>This is the content for the ink icon modal.</p>
              </>
            )} */}
            <button className="close-modal" onClick={toggleModal}> CLOSE </button>
          </div>
        </div>
      )}
    </>
  );
}