import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import coinIcon from './CU.png';
import Icon from './N.png';
import logo from './b.png';
import BB from './BB.png';
import ProgressBar from './ProgressBar';
import Shop from './shop';
import Coindiv from './coin';

function App() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    coins: 0,
    clicks: 0,
    upgradeCost: 10,
    upgradeLevel: 1,
    coinPerClick: 1,
    upgradeCostEnergy: 100,
    upgradeLevelEnergy: 1,
    clickLimit: 1000,
    energyNow: 1000
  });
  const [isShopOpen, setIsShopOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const telegramId = getTelegramId(); // Функция для получения telegramId пользователя
      setUserId(telegramId);
      const response = await axios.post('https://ваш-домен-heroku.com/api/user', { telegramId });
      setUserData(response.data);
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userId) {
      const saveUserData = async () => {
        await axios.put('https://ваш-домен-heroku.com/api/user', { telegramId: userId, userData });
      };
      saveUserData();
    }
  }, [userData, userId]);

  const handleCoinClick = () => {
    if (userData.energyNow >= userData.coinPerClick) {
      setUserData({
        ...userData,
        coins: userData.coins + userData.coinPerClick,
        clicks: userData.clicks + 1,
        energyNow: userData.energyNow - userData.coinPerClick
      });
    }
  };

  const CoinPerClickUpgrade = () => {
    if (userData.coins >= userData.upgradeCost) {
      setUserData({
        ...userData,
        coins: userData.coins - userData.upgradeCost,
        coinPerClick: userData.coinPerClick + 1,
        upgradeLevel: userData.upgradeLevel + 1,
        upgradeCost: Math.floor(userData.upgradeCost * 1.5)
      });
    }
  };

  const EnergyUpgrade = () => {
    if (userData.coins >= userData.upgradeCostEnergy) {
      setUserData({
        ...userData,
        coins: userData.coins - userData.upgradeCostEnergy,
        clickLimit: userData.clickLimit * 2,
        upgradeLevelEnergy: userData.upgradeLevelEnergy + 1,
        upgradeCostEnergy: Math.floor(userData.upgradeCostEnergy * 1.5)
      });
    }
  };

  const handleOpenShop = () => {
    setIsShopOpen(true);
  };

  const handleCloseShop = () => {
    setIsShopOpen(false);
  };

  return (
      <div className="App">
        <div className="info">
          <img src={Icon} alt="Icon"/>
          <p> Name </p>
          <img src={logo} alt="Bifclif"/>
        </div>
        <div className="main">
          <div className="mainInfo">
            <div className="halfBox">
              <div className="halfBoxDiv">
                <p> Coin Per Tap</p>
                <p>+{userData.coinPerClick} <img src={coinIcon} alt="Coin" className="coin-image"/></p>
              </div>
            </div>
            <div className="halfBox">
              <div className="halfBoxDiv">
                <p> Energy </p>
                <p>{userData.clickLimit} / {userData.energyNow}<img src={BB} alt="Battery" className="coin-image"/></p>
              </div>
            </div>
          </div>
          <div className="CoinInfo">
            <img src={coinIcon} alt="Coin" height="90%" />
            <p>{userData.coins}</p>
          </div>
          <Coindiv onClick={handleCoinClick} coinPerClick={userData.coinPerClick} energyNow={userData.energyNow}/>
          <div className="Progress">
            <ProgressBar current={userData.energyNow} max={userData.clickLimit} />
          </div>
          <div className="lower">
            <div className="lowerDiv">
              <div className="BTNLOW">
                <img src={logo} alt="Bifclif" height="65%" />
              </div>
              <div className="BTNLOW">
                <p onClick={handleOpenShop}>Shop</p>
              </div>
              <div className="BTNLOW">
                <p>🔋</p>
              </div>
              <div className="BTNLOW">
                <p>🚀</p>
              </div>
            </div>
          </div>
        </div>

        {isShopOpen && (
            <Shop
                coins={userData.coins}
                coinPerClick={userData.coinPerClick}
                upgradeCost={userData.upgradeCost}
                upgradeLevel={userData.upgradeLevel}
                clickLimit={userData.clickLimit}
                upgradeCostEnergy={userData.upgradeCostEnergy}
                upgradeLevelEnergy={userData.upgradeLevelEnergy}
                onClose={handleCloseShop}
                onUpgrade={CoinPerClickUpgrade}
                onUpgradeEnergy={EnergyUpgrade}
            />
        )}
      </div>
  );
}

export default App;
