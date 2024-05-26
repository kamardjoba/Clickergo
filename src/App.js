import React, { useState } from 'react';
import Coin from './coin';
import Shop from './shop';
import './App.css';

function App() {
  const [coins, setCoins] = useState(0);
  const [coinPerClick, setCoinPerClick] = useState(1);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);

  const handleCoinClick = () => {
    setCoins(coins + coinPerClick);
  };

  const handleOpenShop = () => {
    setIsShopOpen(true);
  };

  const handleCloseShop = () => {
    setIsShopOpen(false);
  };

  const handleUpgrade = () => {
    if (coins >= upgradeCost) {
      setCoins(coins - upgradeCost);
      setCoinPerClick(coinPerClick + 1);
      setUpgradeLevel(upgradeLevel + 1);
      setUpgradeCost(Math.floor(upgradeCost * 1.5));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Кликер Игра</h1>
        <p>Монеты: {coins}</p>
        <p>Монет за клик: {coinPerClick}</p>
        <Coin onClick={handleCoinClick} />
        <button onClick={handleOpenShop}>Магазин</button>
      </header>
      {isShopOpen && (
        <Shop
          coins={coins}
          coinPerClick={coinPerClick}
          upgradeCost={upgradeCost}
          upgradeLevel={upgradeLevel}
          onClose={handleCloseShop}
          onUpgrade={handleUpgrade}
        />
      )}
    </div>
  );
}

export default App;
