import React, { useState } from 'react';
import './shop.css';

const Shop = ({ initialCoins, coinPerClick, upgradeCost, upgradeLevel, onClose, onUpgrade, onUpgradeEnergy, clickLimit, upgradeLevelEnergy, upgradeCostEnergy }) => {
    const [coins, setCoins] = useState(initialCoins);

    const handleClick = () => {
        setCoins(prevCoins => prevCoins + coinPerClick);
    };

    return (
        <div className="shop">
            <h2>Магазин</h2>
            <div className="section">
                <p>Монет за клик</p>
                <div className="section-menu">
                    <p className="main-info">{coinPerClick}</p>
                    <div className="info">
                        <p>Уровень улучшения: {upgradeLevel}</p>
                    </div>
                    <div className="info">
                        <p>Стоимость улучшения: {upgradeCost}</p>
                    </div>
                    <button onClick={onUpgrade} disabled={coins < upgradeCost}>
                        Улучшить
                    </button>
                </div>
            </div>

            <div className="section">
                <p>Энергия</p>
                <div className="section-menu">
                    <p className="main-info">{clickLimit}</p>
                    <div className="info">
                        <p>Уровень улучшения: {upgradeLevelEnergy}</p>
                    </div>
                    <div className="info">
                        <p>Стоимость улучшения: {upgradeCostEnergy}</p>
                    </div>
                    <button onClick={onUpgradeEnergy} disabled={coins < upgradeCostEnergy}>
                        Улучшить
                    </button>
                </div>
            </div>

            <div className="section">
                <p>Текущие монеты</p>
                <div className="section-menu">
                    <p className="main-info">{coins}</p>
                </div>
            </div>

            <button onClick={handleClick} className="click-button">Кликни меня</button>

            <button onClick={onClose} className="close-button">Закрыть</button>
        </div>
    );
};

export default Shop;
