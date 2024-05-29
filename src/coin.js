import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import coinImage from './C.png';
import './coin.css';

const Coindiv = ({ onClick }) => {

    const handleInteractionStart = (event) => {
        const touchEvent = event.type === 'touchstart' ? event.touches[0] : event;
        const rect = event.target.getBoundingClientRect();
        const x = touchEvent.clientX - rect.left;
        const y = touchEvent.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -80;
        const rotateY = ((x / rect.width) - 0.5) * 80;
    
        event.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
    
      const handleInteractionEnd = (event) => {
        event.target.style.transform = 'rotateX(0deg) rotateY(0deg)';
      };

  return (
    <motion.div className='Podsos'
                onMouseDown={handleInteractionStart}
                onMouseUp={handleInteractionEnd}>

      <img src={coinImage} alt="Coin" height="120%" onClick={onClick}/>
    </motion.div>
  );
};

export default Coindiv;