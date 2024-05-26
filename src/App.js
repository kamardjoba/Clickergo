import React, { useState } from 'react';
import Coin from './coin';
import Shop from './shop';
import './App.css';

function App() {
  const [coins, setCoins] = useState(0);
  const [coinPerClick, setCoinPerClick] = useState(1);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const handleOpenShop = () => {
    setIsShopOpen(true);
  };

  const handleCoinClick = () => {
    setCoins(coins + coinPerClick);
  };

  

  const handleCloseShop = () => {
    setIsShopOpen(false);
  };

  const handleUpgrade = (newCoinPerClick, newCost) => {
    setCoins(coins - newCost);
    setCoinPerClick(newCoinPerClick);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clicker Game</h1>
        <p>Coins: {coins}</p>
        <p>Coins per click: {coinPerClick}</p>
        <Coin onClick={handleCoinClick} />
        <button onClick={handleOpenShop}>Shop</button>
      </header>
      {isShopOpen && (
        <Shop
          coins={coins}
          coinPerClick={coinPerClick}
          onClose={handleCloseShop}
          onUpgrade={handleUpgrade}
        />
      )}
    </div>
  );
}

export default App;
