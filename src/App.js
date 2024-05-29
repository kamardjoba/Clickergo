<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 7f320ad55cc722d58b3bc60eabc9f6fd8d3f0aa3
import './App.css';
import coinIcon from './CU.png';
import Icon from './N.png';
import logo from './b.png';
import coinImage from './C.png';
import BB from './BB.png';
import ProgressBar from './ProgressBar';
<<<<<<< HEAD
import axios from 'axios';

function App() {
  const [userId, setUserId] = useState(null);
=======


function App() {

>>>>>>> 7f320ad55cc722d58b3bc60eabc9f6fd8d3f0aa3
  const [coins, setCoins] = useState(0);
  const [clicks, setClicks] = useState(0);
  const clickLimit = 1000;
  const coinPerClick = 1;

<<<<<<< HEAD
  useEffect(() => {
    const telegram = window.Telegram.WebApp;
    const telegramId = telegram.initDataUnsafe.user.id;

    const registerUser = async () => {
      const response = await axios.post('http://localhost:5000/register', { telegramId });
      setUserId(response.data.userId);
    };

    const loadData = async () => {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        setUserId(storedUserId);
        const response = await axios.get(`http://localhost:5000/load/${storedUserId}`);
        setCoins(response.data.coins);
        setClicks(response.data.clicks);
      } else {
        registerUser().then(() => {
          localStorage.setItem('userId', userId);
        });
      }
    };

    loadData();
  }, [userId]);

  useEffect(() => {
    if (userId) {
      axios.post('http://localhost:5000/save', { userId, coins, clicks });
    }
  }, [coins, clicks, userId]);

=======
>>>>>>> 7f320ad55cc722d58b3bc60eabc9f6fd8d3f0aa3
  const handleCoinClick = () => {
    if (clicks < clickLimit) {
      setCoins(coins + coinPerClick);
      setClicks(clicks + 1);
    }
  };

  return (
<<<<<<< HEAD
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
                <p>+{coinPerClick} <img src={coinIcon} alt="Coin" className="coin-image"/></p>
              </div>
            </div>
            <div className="halfBox">
              <div className="halfBoxDiv">
                <p> Energy </p>
                <p>{clickLimit} / {clickLimit-clicks}<img src={BB} alt="Battery" className="coin-image"/></p>
              </div>
            </div>
          </div>
          <div className="CoinInfo">
            <img src={coinIcon} alt="Coin" height="90%" />
            <p>{coins}</p>
          </div>
          <img src={coinImage} onClick={handleCoinClick} alt="Coin" height="50%"/>
          <div className="Progress">
            <ProgressBar current={clicks} max={clickLimit} />
          </div>
          <div className="lower">
            <div className="lowerDiv">
              <img src={logo} alt="Bifclif"/>
              <p>Shop</p>
              <p>🔋</p>
              <p>🚀</p>
            </div>
          </div>
        </div>
      </div>
=======
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
              <p>{clickLimit} / {clickLimit-clicks}<img src={BB} alt="Battery" class="coin-image"/></p>
            </div>
          </div>
        </div>
        <div class="CoinInfo">			
          <img src={coinIcon} alt="Coin" height = "90%" />
          <p>{coins}</p>			
        </div>
          <img src={coinImage} onClick={handleCoinClick} alt="Coin" height="50%"/>
        <div class="Progress">
        <ProgressBar current={clicks} max={clickLimit} />
		    </div>
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
>>>>>>> 7f320ad55cc722d58b3bc60eabc9f6fd8d3f0aa3
  );
}

export default App;
