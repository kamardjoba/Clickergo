import React from 'react';
import './shop.css';

const Shop = ({ coins, coinPerClick, upgradeCost, upgradeLevel, onClose, onUpgrade }) => {
  return (
    <div className="shop">
      <h2>Магазин</h2>
      <div id="CoinPerTap">
        <p>Уровень улучшения: {upgradeLevel}</p>
        <p>Монет за клик: {coinPerClick}</p>
        <p>Стоимость улучшения: {upgradeCost}</p>
        <button onClick={onUpgrade} disabled={coins < upgradeCost}>
          Улучшить
        </button>
      </div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default Shop;
