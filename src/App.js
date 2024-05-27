import React, { useState, useEffect } from 'react';

function App() {

  return (
    <div class="App">
      <div class = "info">
        <img src="N.png" alt="Icon">
        <p> Name </p>
        <img src="b.png" alt="Bifclif">
      </div>
      <div class = "main">
        <div class="mainInfo">
          <div class="halfBox">
            <div class = "halfBoxDiv">
              <p> Coin Tap</p>
              <p>+1 <img src="CU.png" alt="Coin" class="coin-image"></p>
            </div>
          </div>
          <div class="halfBox">
            <div class = "halfBoxDiv">
              <p> Coin per hour</p>
              <p>+0 <img src="CU.png" alt="Coin" class="coin-image"></p>
            </div>
          </div>
        </div>
      
      <div class="CoinInfo">			
        <img src="CU.png" alt="Coin">
        <p> 1000</p>			
      </div>
      <img src="C.png" alt="Coin">
      <div class = "lower">
        <div class = "lowerDiv">
          <img src="b.png" alt="Bifclif">
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
