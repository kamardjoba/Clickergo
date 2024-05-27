import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  return (
    <div class="App">
      <div class = "info">
        <img src="C:\Users\struk\Desktop\Main Game\GitHub\Clickergo\src\N.png" alt="Icon"></img>
        <p> Name </p>
        <img src="b.png" alt="Bifclif"></img>
      </div>
      <div class = "main">
        <div class="mainInfo">
          <div class="halfBox">
            <div class = "halfBoxDiv">
              <p> Coin Tap</p>
              <p>+1 <img src="CU.png" alt="Coin" class="coin-image"></img></p>
            </div>
          </div>
          <div class="halfBox">
            <div class = "halfBoxDiv">
              <p> Coin per hour</p>
              <p>+0 <img src="CU.png" alt="Coin" class="coin-image"></img></p>
            </div>
          </div>
        </div>
      
      <div class="CoinInfo">			
        <img src="CU.png" alt="Coin"></img> 
        <p> 1000</p>			
      </div>
      <img src="src\C.png" alt="Coin"></img> 
      <div class = "lower">
        <div class = "lowerDiv">
          <img src="b.png" alt="Bifclif"></img>
          <p>Shop</p>
          <p>🔋</p>
          <p>🚀</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
