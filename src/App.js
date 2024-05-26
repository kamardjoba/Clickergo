import React, { useState, useEffect } from 'react';
import Coin from './coin';
import Shop from './shop';
import ProgressBar from './ProgressBar';
import Modal from './modal';
import './App.css';

function App() {
  const [coins, setCoins] = useState(0);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Добавляем состояние для модального окна
  const [clicks, setClicks] = useState(1000);  // Изначально 1000 кликов
  const [userId, setUserId] = useState(null); // Здесь нужно получить user ID от Telegram

  const [coinPerClick, setCoinPerClick] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);

  const [clickLimit, setLimitEnergy] = useState(1000);
  const [upgradeCostEnergy, setupgradeCostEnergy] = useState(500);
  const [upgradeLevelEnergy, setUpgradeLevelEnergy] = useState(1);

  const checkSubscription = async () => {
    try {
      const response = await fetch('/check-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      });

      const data = await response.json();
      return data.isMember;
    } catch (error) {
      console.error('Error checking subscription:', error.message);
      return false;
    }
  };

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

  const handleEarn = () => {
    setIsModalOpen(true);  // Открываем модальное окно при нажатии на Earn
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckSubscription = async () => {
    const isSubscribed = await checkSubscription();

    if (isSubscribed) {
      setCoins(coins + 5000);
      alert('Thank you for subscribing! You have earned 5000 coins.');
      setIsModalOpen(false);
    } else {
      alert('Please subscribe to our channel first: https://t.me/your_channel_nickname');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Кликер Игра</h1>
          <p>Монеты: {coins}</p>
          <p>Монет за клик: {coinPerClick}</p>
        </header>
        <div className="coin-container">
          <Coin onClick={handleCoinClick} />
        </div>
        <div className="progress-bar-container">
          <ProgressBar current={clicks} max={clickLimit} />
          <p>{clicks} / {clickLimit}</p>
        </div>
        <div className="controls">
          <div className="boost" onClick={handleOpenShop}>Boost 🚀</div>
          <div className="earn" onClick={handleEarn}>Earn 💰</div>
        </div>
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
        {isModalOpen && (
            <Modal
                onClose={handleCloseModal}
                onCheckSubscription={handleCheckSubscription}
            />
        )}
      </div>
  );
}

export default App;
