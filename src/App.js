import React from 'react';
import './App.css';
import coinImage from './C.png';
import coinIcon from './CU.png';
import Icon from './N.png';
import logo from './b.png';

function App() {
  return (
    <div className="App">
      <div className="info">
        <img src={Icon} alt="Icon" />
        <p>Name</p>
        <img src={logo} alt="Bifclif" />
      </div>
      <div className="main">
        <div className="mainInfo">
          <div className="halfBox">
            <p>Coin Tap</p>
            <p>+1 <img src={coinIcon} alt="Coin" className="coin-image" /></p>
          </div>
          <div className="halfBox">
            <p>Coin per hour</p>
            <p>+0 <img src={coinIcon} alt="Coin" className="coin-image" /></p>
          </div>
        </div>
        <div className="CoinInfo">
          <img src={coinIcon} alt="Coin" height="90%" />
          <p>1000</p>
        </div>
        <img src={coinImage} alt="Coin" height="50%" />
        <div className="lower">
          <img src={logo} alt="Bifclif" />
          <p>Shop</p>
          <p>🔋</p>
          <p>🚀</p>
        </div>
      </div>
    </div>
  );
}

export default App;