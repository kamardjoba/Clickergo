import React, { useState } from 'react';
import './App.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleEarn = () => {
    // Simulate earning coins (replace with your actual logic)
    setBalance(balance + 1);
  };

  const handleBoost = () => {
    // Simulate boosting earnings (replace with your actual logic)
    setBalance(balance * 2);
  };

  const handleClaim = () => {
    // Simulate claiming coins (replace with your actual logic)
    setShowPopup(false);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="balance">
          <h1>{balance}</h1>
          <span>NOT</span>
        </div>
        <button className="claim-button" onClick={() => setShowPopup(true)}>
          Claim
        </button>
      </div>

      <div className="actions">
        <button className="earn-button" onClick={handleEarn}>
          Earn
        </button>
        <button className="boost-button" onClick={handleBoost}>
          Boost
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>You have earned {balance} NOT!</p>
            <button className="claim-button" onClick={handleClaim}>
              Claim
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;