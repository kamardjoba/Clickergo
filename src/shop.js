import React from 'react';
import './shop.css';

const Shop = ({ coins, coinPerClick, upgradeCost, upgradeLevel, onClose, onUpgrade, onUpgradeEnergy, clickLimit, upgradeLevelEnergy, upgradeCostEnergy}) => {
  return (
      <div className="shop">
        <div class="zagolovok">
        <p>Магазин</p>
        </div>
        <div className="section">
          <div className='hz'>
            <p>Монет за клик</p>
          </div>
          <div className="section-menu">
            <p>{coinPerClick}</p>
            <div className="inform">
              <p>Уровень улучшения: {upgradeLevel}</p>
            </div>
            <div className="inform">
              <p>Стоимость улучшения: {upgradeCost}</p>
            </div>
            <button onClick={onUpgrade} disabled={coins < upgradeCost}>
              Улучшить
            </button>
          </div>
        </div>

        <div className="section">
          <div className='hz'>
            <p>Энергия</p>
          </div>
          <div className="section-menu">
            <p>{clickLimit}</p>
            <div className="inform">
              <p>Уровень улучшения: {upgradeLevelEnergy}</p>
            </div>
            <div className="inform">
              <p>Стоимость улучшения: {upgradeCostEnergy}</p>
            </div>
            <button onClick={onUpgradeEnergy} disabled={coins < upgradeCostEnergy}>
              Улучшить
            </button>
          </div>
        </div>

        <div className="section">
          <div className='hz'>
            <p>Востановления енергиї</p>
          </div>
          <div className="section-menu">
            <p>{clickLimit}</p>
            <div className="inform">
              <p>Уровень улучшения: {upgradeLevelEnergy}</p>
            </div>
            <div className="inform">
              <p>Стоимость улучшения: {upgradeCostEnergy}</p>
            </div>
            <button onClick={onUpgradeEnergy} disabled={coins < upgradeCostEnergy}>
              Улучшить
            </button>
          </div>
        </div>
        <div class="zagolovok">
        <button onClick={onClose} className="close-button">Закрыть</button>
        </div>
      </div>
  );
};

export default Shop;
