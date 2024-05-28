import React, { useState } from 'react';
import './App.css';
import coinIcon from './CU.png';
import Icon from './N.png';
import logo from './b.png';
import coinImage from './C.png';
import ProgressBar from './ProgressBar';


function App() {

  const [coins, setCoins] = useState(0);
  const [clicks, setClicks] = useState(0);
  const clickLimit = 1000;
  const coinPerClick = 1;

  const handleCoinClick = () => {
    if (clicks < clickLimit) {
      setCoins(coins + coinPerClick);
      setClicks(clicks + 1);
    }
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
              <p> Coin Tap</p>
              <p>+1 <img src={coinIcon} alt="Coin" class="coin-image"/></p>
            </div>
          </div>
          <div class="halfBox">
            <div class = "halfBoxDiv">
              <p> Coin per hour</p>
              <p>+0 <img src={coinIcon} alt="Coin" class="coin-image"/></p>
            </div>
          </div>
        </div>
        <div class="CoinInfo">			
          <img src={coinIcon} alt="Coin" height = "90%" />
          <p>{coins}</p>			
        </div>
          <img src={coinImage} onClick={handleCoinClick} alt="Coin" height="50%"/>
          <ProgressBar current={clicks} max={clickLimit} />
        <div class = "lower">
          <div class = "lowerDiv">
            <img src={logo} alt="Bifclif"/>
            <p>Shop</p>
            <p>🔋</p>
            <p>🚀</p>
          </div>
        </div>
      </div>
    </div>
  </body>
  );
}

export default App;
