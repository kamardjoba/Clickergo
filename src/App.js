import React, { useState, useEffect } from 'react';
import Coin from './coin';
import Shop from './shop';
import ProgressBar from './ProgressBar';
import './App.css';

function App() {
  const [coins, setCoins] = useState(0);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [clicks, setClicks] = useState(1000);  // Изначально 1000 кликов

  const [coinPerClick, setCoinPerClick] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);

  const [clickLimit, setLimitEnergy] = useState(1000);
  const [upgradeCostEnergy, setupgradeCostEnergy] = useState(500);
  const [upgradeLevelEnergy, setUpgradeLevelEnergy] = useState(1);

  // Загрузка сохраненного состояния при загрузке компонента
  useEffect(() => {
    const savedCoins = localStorage.getItem('coins');
    const savedCoinPerClick = localStorage.getItem('coinPerClick');
    const savedUpgradeCost = localStorage.getItem('upgradeCost');
    const savedUpgradeLevel = localStorage.getItem('upgradeLevel');
    const savedClicks = localStorage.getItem('clicks');
    const savedClickLimit = localStorage.getItem('clickLimit');
    const savedUpgradeCostEnergy = localStorage.getItem('upgradeCostEnergy');
    const savedUpgradeLevelEnergy = localStorage.getItem('upgradeLevelEnergy');

    if (savedCoins !== null) setCoins(Number(savedCoins));
    if (savedCoinPerClick !== null) setCoinPerClick(Number(savedCoinPerClick));
    if (savedUpgradeCost !== null) setUpgradeCost(Number(savedUpgradeCost));
    if (savedUpgradeLevel !== null) setUpgradeLevel(Number(savedUpgradeLevel));
    if (savedClicks !== null) setClicks(Number(savedClicks));
    if (savedClickLimit !== null) setLimitEnergy(Number(savedClickLimit));
    if (savedUpgradeCostEnergy !== null) setupgradeCostEnergy(Number(savedUpgradeCostEnergy));
    if (savedUpgradeLevelEnergy !== null) setUpgradeLevelEnergy(Number(savedUpgradeLevelEnergy));
  }, []);

  // Сохранение состояния при каждом изменении
  useEffect(() => {
    localStorage.setItem('coins', coins);
    localStorage.setItem('coinPerClick', coinPerClick);
    localStorage.setItem('upgradeCost', upgradeCost);
    localStorage.setItem('upgradeLevel', upgradeLevel);
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('clickLimit', clickLimit);
    localStorage.setItem('upgradeCostEnergy', upgradeCostEnergy);
    localStorage.setItem('upgradeLevelEnergy', upgradeLevelEnergy);
  }, [coins, coinPerClick, upgradeCost, upgradeLevel, clicks, clickLimit, upgradeCostEnergy, upgradeLevelEnergy]);

  useEffect(() => {
    const interval = setInterval(() => {
      setClicks(prevClicks => Math.min(prevClicks + coinPerClick, clickLimit));
    }, 3000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [coinPerClick, clickLimit]);

  const handleCoinClick = () => {
    if (clicks > 0) {
      setCoins(coins + coinPerClick);
      setClicks(clicks - coinPerClick);  // Уменьшаем количество кликов в зависимости от coinPerClick
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

                clickLimit={clickLimit}
                upgradeCostEnergy={upgradeCostEnergy}
                upgradeLevelEnergy={upgradeLevelEnergy}

                onClose={handleCloseShop}
                onUpgrade={handleUpgrade}
                onUpgradeEnergy={handleUpgradeEnergy}
            />
        )}
      </div>
  );
}

export default App;
