import React, { useState } from 'react';
import Coin from './coin';
import Shop from './shop';
import ProgressBar from './ProgressBar';
import './App.css';

function App() {
  const [coins, setCoins] = useState(0);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [clicks, setClicks] = useState(0);

  const [coinPerClick, setCoinPerClick] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);

  const [clickLimit, setLimitEnergy] = useState(1000);
  const [upgradeCostEnergy, setupgradeCostEnergy] = useState(500);
  const [upgradeLevelEnergy, setUpgradeLevelEnergy] = useState(1);

  const handleCoinClick = () => {
    if (clicks < clickLimit) {
      setCoins(coins + coinPerClick);
      setClicks(clicks + 1);
    }
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

  const handleUpgradeEnergy = () => {
    if (coins >= upgradeCostEnergy) {
      setCoins(coins - upgradeCostEnergy);
      setLimitEnergy(clickLimit * 2);
      setUpgradeLevelEnergy(upgradeLevelEnergy + 1);
      setupgradeCostEnergy(Math.floor(upgradeCostEnergy * 1.5));
    }
  };
  
  return (
      <body>
        <header className="App-header">
          <h1>Кликер Игра</h1>
          <p>Монеты: {coins}</p>
          <p>Монет за клик: {coinPerClick}</p>
          <Coin onClick={handleCoinClick} />
          <button onClick={handleOpenShop}>Магазин</button>
          <ProgressBar current={clicks} max={clickLimit} />
          <p>{clicks} / {clickLimit}</p>
        </header>
        {isShopOpen && (
            <Shop
                coins={coins}
                coinPerClick={coinPerClick}
                upgradeCost={upgradeCost}
                upgradeLevel={upgradeLevel}

                clickLimit = {clickLimit}
                upgradeCostEnergy = {upgradeCostEnergy}
                upgradeLevelEnergy = {upgradeLevelEnergy}
                
                onClose={handleCloseShop}
                onUpgrade={handleUpgrade}
                onUpgradeEnergy={handleUpgradeEnergy}
            />
        )}
      </body>
  );
}

export default App;
