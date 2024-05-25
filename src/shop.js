import React, { useState } from 'react';
import './Shop.css';

const Shop = ({ coins, coinPerClick, onClose, onUpgrade }) => {
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);

  const handleUpgrade = () => {
    if (coins >= upgradeCost) {
      const newCoinPerClick = coinPerClick + 1;
      const newUpgradeCost = Math.floor(upgradeCost * 1.5);
      onUpgrade(newCoinPerClick, upgradeCost);
      setUpgradeLevel(upgradeLevel + 1);
      setUpgradeCost(newUpgradeCost);
    }
  };

  return (
    <div className="shop">
      <h2>Shop</h2>
      <p>Upgrade Level: {upgradeLevel}</p>
      <p>Coins per click: {coinPerClick}</p>
      <p>Upgrade Cost: {upgradeCost}</p>
      <button onClick={handleUpgrade} disabled={coins < upgradeCost}>
        Upgrade
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Shop;
