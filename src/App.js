import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([
    { name: 'Bitcoin', price: 0 },
    { name: 'Ethereum', price: 0 },
    { name: 'Ripple', price: 0 },
  ]);

  const updatePrices = () => {
    // В реальном приложении здесь бы был запрос к API для получения цен.
    const updatedCoins = coins.map(coin => ({
      ...coin,
      price: (Math.random() * 10000).toFixed(2), // Генерация случайных цен для примера
    }));
    setCoins(updatedCoins);
  };

  useEffect(() => {
    updatePrices();
  }, []);

  return (
      <div className="app">
        <header className="header">
          <h1>NotCoin App</h1>
        </header>
        <main className="main">
          <button onClick={updatePrices} className="update-button">Update Prices</button>
          <ul className="coin-list">
            {coins.map(coin => (
                <li key={coin.name} className="coin-item">
                  <span className="coin-name">{coin.name}</span>
                  <span className="coin-price">${coin.price}</span>
                </li>
            ))}
          </ul>
        </main>
      </div>
  );
};

export default App;
