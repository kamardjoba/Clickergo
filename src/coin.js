import React from 'react';
import { motion } from 'framer-motion';
import coinImage from './coin.png';
import './coin.css';

const Coin = ({ onClick }) => {

  const handleMouseDown = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; // X-coordinate relative to the coin
    const y = event.clientY - rect.top;  // Y-coordinate relative to the coin
    const rotateX = ((y / rect.height) - 0.5) * -20; // Rotate in Y axis
    const rotateY = ((x / rect.width) - 0.5) * 20;  // Rotate in X axis

    event.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseUp = (event) => {
    event.target.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
      <motion.div
          className="coin"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={onClick}
      >
        <img src={coinImage} alt="Coin" />
      </motion.div>
  );
};

export default Coin;
