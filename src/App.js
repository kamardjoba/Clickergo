import React from 'react';
import './CoinDisplay.css';

const CoinDisplay = () => {
  return (
    <div className="coin-display">
      <div className="coin-header">
        <div className="coin-count">951,673</div>
        <div className="coin-rank">
          <span>266,350th</span>
          <span className="gold-trophy">🏆 Gold</span>
        </div>
      </div>
      <div className="coin-icon">
        <div className="icon-circle">
          <div className="icon-triangle">△</div>
        </div>
      </div>
      <div className="energy-bar">
        <span className="energy-icon">⚡</span> 3606
        <div className="energy-progress">
          <div className="energy-filled" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div className="bottom-menu">
        <div className="menu-item">Friends</div>
        <div className="menu-item">Earn</div>
        <div className="menu-item">Boosts</div>
      </div>
    </div>
  );
}

export default CoinDisplay;
