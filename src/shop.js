import React from 'react';
import './shop.css';

const Shop = ({ coins, coinPerClick, upgradeCost, upgradeLevel, onClose, onUpgrade, onUpgradeEnergy, clickLimit, upgradeLevelEnergy, upgradeCostEnergy }) => {
  return (
    <div class="shop">
      <h2>Магазин</h2>
      <div id="CoinPerTap">
        <p>Монет за клик </p>
        <div id="BuyCoinPerTapMenu">
          <p id="MainInfo">{coinPerClick}</p>
          <div id="CoinPerTapInfo">
            <p>Уровень улучшения: {upgradeLevel}</p>
          </div>
          <div id="CoinPerTapInfo">
            <p>Стоимость улучшения: {upgradeCost}</p>
          </div>
          <button onClick={onUpgrade} disabled={coins < upgradeCost}>
            Улучшить
          </button>
        </div>
      </div>

      <div id="CoinPerTap">
        <p>Енергия</p>
        <div id="BuyCoinPerTapMenu">
          <p id="MainInfo">{clickLimit}</p>
          <div id="CoinPerTapInfo">
            <p>Уровень улучшения: {upgradeLevelEnergy}</p>
          </div>
          <div id="CoinPerTapInfo">
            <p>Стоимость улучшения: {upgradeCostEnergy}</p>
          </div>
          <button onClick={onUpgradeEnergy} disabled={coins < upgradeCostEnergy}>
            Улучшить
          </button>
        </div>
      </div>

      <button onClick={onClose} id="clouseButtom">Закрыть</button>

    </div>
  );
};

export default Shop;
