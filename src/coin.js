import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import coinImage from './coin.png';
import './coin.css';

const Coin = ({ onClick, coinPerClick, clicks }) => {
  const [clicksArray, setClicksArray] = useState([]);

  const handleInteractionStart = (event) => {
    const touchEvent = event.type === 'touchstart' ? event.touches[0] : event;
    const rect = event.target.getBoundingClientRect();
    const x = touchEvent.clientX - rect.left;
    const y = touchEvent.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    event.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleInteractionEnd = (event) => {
    event.target.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const handleCoinClick = (event) => {
    const touchEvent = event.type === 'touchstart' ? event.touches[0] : event;
    if (clicks < coinPerClick) return;

    const rect = event.target.getBoundingClientRect();
    const x = touchEvent.clientX - rect.left;
    const y = touchEvent.clientY - rect.top;

    setClicksArray((prevClicks) => [
      ...prevClicks,
      { id: Date.now(), x, y, value: coinPerClick },
    ]);

    onClick();
  };

  return (
      <div className="coin-container">
        <motion.div
            className="coin"
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onTouchStart={(event) => { handleInteractionStart(event); handleCoinClick(event); }}
            onTouchEnd={handleInteractionEnd}
            onClick={handleCoinClick}
        >
          <img src={coinImage} alt="Coin" />
          <AnimatePresence>
            {clicksArray.map((click) => (
                <motion.div
                    key={click.id}
                    className="click-value"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -50 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    style={{ top: click.y, left: click.x }}
                >
                  +{click.value}
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
  );
};

export default Coin;
