import React, { useState, useEffect } from 'react';
import './RetrieveData.css';

export default function SavedImageData() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('savedImageData');
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <h2>Saved Images:</h2>
      <ul>
        {savedData.map((item, index) => (
          <li key={index}>
            <strong>Prompt:</strong> {item.prompt}<br />
            <img src={item.imageUrl} alt={`Generated ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
