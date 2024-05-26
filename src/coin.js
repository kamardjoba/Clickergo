import React from 'react';
import coinImage from './coin.png'; // Замените на путь к вашему изображению

const Coin = ({ onClick }) => {
  return (
      <div>
        <img src={coinImage} alt="Coin" onClick={onClick} style={{ cursor: 'pointer', width: '150px', height: '150px' }} />
      </div>
  );
};

export default Coin;
