import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import coinImage from './C.png';
import './coin.css';

const Coindiv = ({ onClick, coinPerClick, energyNow}) => {
  const [clicksArray, setClicksArray] = useState([]);

  const handleInteractionStart = (event) => {
    const touchEvent = event.type === 'touchstart' ? event.touches[0] : event;
    const rect = event.target.getBoundingClientRect();
    const x = touchEvent.clientX - rect.left;
    const y = touchEvent.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -40;
    const rotateY = ((x / rect.width) - 0.5) * 40;
    
    event.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
    
  const handleInteractionEnd = (event) => {
    event.target.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const NumberUpAnim = (event) => {
    const touchEvent = event.type === 'touchstart' ? event.touches[0] : event;
    if (coinPerClick <=  energyNow) return;
    
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
    <motion.div className='Podsos'>

      <img  src={coinImage} 
            alt="Coin" 
            height="105%" 
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onClick={NumberUpAnim}
            onTouchStart={(event) => { handleInteractionStart(event); handleCoinClick(event); }}
            onTouchEnd={handleInteractionEnd}
            />

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
  );
};

export default Coindiv;