import React from 'react';
import  {motion}  from 'framer-motion';
import coinImage from './C.png';

const Coin = ({ onClick }) => {
  return (
    <motion.div
      className="coin"
      onClick={onClick}
      whileTap={{ rotate: [0, 360] }}
      transition={{ duration: 0.5 }}
    >
      <img src={coinImage} alt="Coin" height="50%"/>
    </motion.div>

  );
};

export default Coin;