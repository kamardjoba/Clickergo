import React, { useState, useEffect } from 'react';
import './App.css';
import coinImage from './C.png';
import coinIcon from './CU.png';
import Icon from './N.png';
import logo from './b.png';


function App() {

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
          <p> 1000</p>			
        </div>
        <img src={coinImage} alt="Coin" height = "50%"/>
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
