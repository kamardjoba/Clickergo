import React from 'react';
import  {motion}  from 'framer-motion';
import coinImage from './C.png';

const Coin = ({ onClick }) => {
  return (
    <motion.div className="coin" onClick={onClick}>
      <img src={coinImage} alt="Coin" height="50%"/>
    </motion.div>

  );
};

export default Coin;