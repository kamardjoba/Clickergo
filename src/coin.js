import React from 'react';
import coinImage from './C.png';
import './coin.css';

const Coindiv = ({ onClick }) => {
  return (
    <div className='Podsos'>
      <img src={coinImage} alt="Coin" height="90%" onClick={onClick}/>
    </div>
  );
};

export default Coindiv;