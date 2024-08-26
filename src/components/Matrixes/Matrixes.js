// src/Matrix.js
import React, { useState } from 'react';
import './Matrix.css'; 

const Matrixes = () => {
  const initialState = Array(9).fill(null);
  const [boxes, setBoxes] = useState(initialState);
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleClick = (index) => {
    if (boxes[index] === null) {
      const newBoxes = [...boxes];
      newBoxes[index] = 'green';

      setBoxes(newBoxes);
      setClickedOrder([...clickedOrder, index]);

    
      if (clickedOrder.length === 8) {
        changeAllToOrange(newBoxes);
      }
    }
  };

  const changeAllToOrange = (newBoxes) => {
    const orangeBoxes = newBoxes.map((box, idx) =>
      clickedOrder.includes(idx) ? 'orange' : box
    );
    setBoxes(orangeBoxes);
  };

  return (
    <div className="matrix">
      {boxes.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color || 'white' }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrixes;
