import React, { useState } from 'react';
import './App.css';
import coinIcon from './CU.png';
import Icon from './N.png';
import logo from './b.png';
import coinImage from './C.png';
import BB from './BB.png';
import ProgressBar from './ProgressBar';
import Shop from './shop';


function App() {

  const [clicks, setClicks] = useState(0);

  const [coins, setCoins] = useState(0);

  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);
  const [coinPerClick, setCoinPerClick] = useState(1);

  const clickLimit = 1000;
  const energyNow = 1000;
  

  const [isShopOpen, setIsShopOpen] = useState(false);

  const handleCoinClick = () => {
    if (clicks < clickLimit) {
      setCoins(coins + coinPerClick);
      setClicks(clicks + 1);
      energyNow - coinPerClick;
    }
  };

  const CoinPerClickUpgrade = () => {
    if (coins >= upgradeCost) {
      setCoins(coins - upgradeCost);
      setCoinPerClick(coinPerClick + 1);
      setUpgradeLevel(upgradeLevel + 1);
      setUpgradeCost(Math.floor(upgradeCost * 1.5));
    }
  };

  const handleOpenShop = () => {
    setIsShopOpen(true);
  };

  const handleCloseShop = () => {
    setIsShopOpen(false);
  };

  return (
  <body>
    <div class="App">
      <div class = "info">
        <img src={Icon} alt="Icon"/>
        <p> Name </p>
        <img src={logo} alt="Bifclif"/>
      </div>
      <div class = "main">
        <div class="mainInfo">
          <div class="halfBox">
            <div class = "halfBoxDiv">
              <p> Coin Per Tap</p>
              <p>+{coinPerClick} <img src={coinIcon} alt="Coin" class="coin-image"/></p>
            </div>
          </div>
          <div class="halfBox">
            <div class = "halfBoxDiv">
              <p> Energy </p>
              <p>{clickLimit} / {energyNow}<img src={BB} alt="Battery" class="coin-image"/></p>
            </div>
          </div>
        </div>
        <div class="CoinInfo">			
          <img src={coinIcon} alt="Coin" height = "90%" />
          <p>{coins}</p>			
        </div>
          <img src={coinImage} onClick={handleCoinClick} alt="Coin" height="50%"/>
        <div class="Progress">
        <ProgressBar current={energyNow} max={clickLimit} />
		    </div>
        <div class = "lower">
          <div class = "lowerDiv">
            <img src={logo} alt="Bifclif"/>
            <p onClick={handleOpenShop} >Shop</p>
            <p>🔋</p>
            <p>🚀</p>
          </div>
        </div>
      </div>
    </div>

    {isShopOpen && (
            <Shop
                coins={coins}
                coinPerClick={coinPerClick}
                upgradeCost={upgradeCost}
                upgradeLevel={upgradeLevel}

                onClose={handleCloseShop}
                onUpgrade={CoinPerClickUpgrade}

            />
        )}

  </body>
  );
}

export default App;
