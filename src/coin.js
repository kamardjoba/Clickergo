import React from 'react';
import { motion } from 'framer-motion';
import coinImage from './coin.png';
import './coin.css';

const Coin = ({ onClick }) => {
  return (
    <motion.div
      className="coin"
      onClick={onClick}
      whileTap={{ rotate: [0, 360] }}
      transition={{ duration: 0.5 }}
    >
      <img src={coinImage} alt="Coin" />
    </motion.div>

  );
};

export default Coin;
