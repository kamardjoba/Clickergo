import React from 'react';
import  {motion}  from 'framer-motion';
import coinImage from './C.png';
import './Coin.css';

const Coin = ({ onClick }) => {
  return (
    <motion.div class="coin" onClick={onClick}>
      <img src={coinImage} alt="Coin" height="50%"/>
    </motion.div>

  );
};

export default Coin;