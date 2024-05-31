import React, { useState, useEffect } from 'react';
import './App.css';
import coinIcon from './CU.png';
import Icon from './N.png';
import logo from './b.png';
import BB from './BB.png';
import ProgressBar from './ProgressBar';
import Shop from './shop';
import Coindiv from './coin';

function App() {

  const [clicks, setClicks] = useState(0);
  const [coins, setCoins] = useState(0);

  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);
  const [coinPerClick, setCoinPerClick] = useState(1);

  const [upgradeCostEnergy, setUpgradeCostEnergy] = useState(100)
  const [upgradeLevelEnergy, setUpgradeLevelEnergy] = useState(1)
  const [clickLimit, setClickLimit] = useState(1000);
  const [energyNow, setEnergyNow] = useState(1000);

  const [upgradeCostEnergyTime, setUpgradeCostEnergyTime] = useState(200)
  const [valEnergyTime, setvalEnergyTime] = useState(0.5)
  const [upgradeEnergyTimeLevel, setupgradeEnergyTimeLevel] = useState(1)
  const [time, setTime] = useState(2000)

  const [isShopOpen, setIsShopOpen] = useState(false);

  //Нажатие на монету
  const handleCoinClick = () => {
  if (energyNow >= coinPerClick) {
    setCoins(coins + coinPerClick);
    setClicks(clicks + 1);
    setEnergyNow(energyNow - coinPerClick);
  }
};
  
  //Востановления енергиї
  useEffect(() => {
  const interval = setInterval(() => {
    setEnergyNow((energyNow) => {
      if (energyNow < clickLimit) {
        return energyNow + 1;
      } else {
        return energyNow;
      }
    });
  }, time);

  return () => clearInterval(interval);
}, [clickLimit, time]);

  //Прокачка монет за тап
  const CoinPerClickUpgrade = () => {
    if (coins >= upgradeCost) {
      setCoins(coins - upgradeCost);
      setCoinPerClick(coinPerClick + 1);
      setUpgradeLevel(upgradeLevel + 1);
      setUpgradeCost(Math.floor(upgradeCost * 1.5));
    }
  };

  //Прокачка лимита енергиї
  const EnergyUpgrade = () => {
    if (coins >= upgradeCostEnergy) {
      setCoins(coins - upgradeCostEnergy);
      setClickLimit(clickLimit * 2);
      setUpgradeLevelEnergy(upgradeLevelEnergy + 1);
      setUpgradeCostEnergy(Math.floor(upgradeCostEnergy * 1.5));
    }
  };

  //Прокачка востановления енергії
  const EnergyTimeUpgrade = () => {
    if (coins >= upgradeCostEnergyTime) {
      setCoins(coins - upgradeCostEnergyTime);
      setvalEnergyTime(valEnergyTime * 2);
      setupgradeEnergyTimeLevel(upgradeEnergyTimeLevel + 1);
      setTime(time / 2);
      setUpgradeCostEnergyTime(Math.floor(upgradeCostEnergyTime * 1.5));
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
          <Coindiv onClick={handleCoinClick} coinPerClick={coinPerClick} energyNow={energyNow}/> 
        <div class="Progress">
        <ProgressBar current={energyNow} max={clickLimit} />
		    </div>
        <div class = "lower">
          <div class = "lowerDiv">
            <div class="BTNLOW">
              <img src={logo} alt="Bifclif" height = "65%" />
            </div>
            <div class="BTNLOW">
              <p onClick={handleOpenShop} >Shop</p>
            </div>
            <div class="BTNLOW">
              <p>🔋</p>
            </div>
            <div class="BTNLOW">
              <p>🚀</p>
            </div>
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

                clickLimit={clickLimit}
                upgradeCostEnergy={upgradeCostEnergy}
                upgradeLevelEnergy={upgradeLevelEnergy}

                upgradeCostEnergyTime={upgradeCostEnergyTime}
                valEnergyTime={valEnergyTime}
                upgradeEnergyTimeLevel={upgradeEnergyTimeLevel}
                
                onClose={handleCloseShop}
                onUpgrade={CoinPerClickUpgrade}
                onUpgradeEnergy={EnergyUpgrade}
                onUpgradeEnergyTime={EnergyTimeUpgrade}
            />
        )}

  </body>
  );
}

export default App;
