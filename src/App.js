import React, { useState, useEffect } from 'react';
import Coin from './components/Coin';
import Shop from './components/Shop';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [coins, setCoins] = useState(0);
  const [coinPerClick, setCoinPerClick] = useState(1);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);
  const [clicks, setClicks] = useState(0);
  const clickLimit = 1000;

  // Загрузка сохраненного состояния при загрузке компонента
  useEffect(() => {
    const savedCoins = localStorage.getItem('coins');
    const savedCoinPerClick = localStorage.getItem('coinPerClick');
    const savedUpgradeCost = localStorage.getItem('upgradeCost');
    const savedUpgradeLevel = localStorage.getItem('upgradeLevel');
    const savedClicks = localStorage.getItem('clicks');

    if (savedCoins !== null) setCoins(Number(savedCoins));
    if (savedCoinPerClick !== null) setCoinPerClick(Number(savedCoinPerClick));
    if (savedUpgradeCost !== null) setUpgradeCost(Number(savedUpgradeCost));
    if (savedUpgradeLevel !== null) setUpgradeLevel(Number(savedUpgradeLevel));
    if (savedClicks !== null) setClicks(Number(savedClicks));
  }, []);

  // Сохранение состояния при каждом изменении
  useEffect(() => {
    localStorage.setItem('coins', coins);
    localStorage.setItem('coinPerClick', coinPerClick);
    localStorage.setItem('upgradeCost', upgradeCost);
    localStorage.setItem('upgradeLevel', upgradeLevel);
    localStorage.setItem('clicks', clicks);
  }, [coins, coinPerClick, upgradeCost, upgradeLevel, clicks]);

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

  return (
      <div className="App">
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
                onClose={handleCloseShop}
                onUpgrade={handleUpgrade}
            />
        )}
      </div>
  );
}

export default App;
