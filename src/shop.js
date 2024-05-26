import React from 'react';
import './shop.css';

const Shop = ({ coins, coinPerClick, upgradeCost, upgradeLevel, onClose, onUpgrade, onUpgradeEnergy, clickLimit, upgradeLevelEnergy, upgradeCostEnergy }) => {
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

            <button onClick={onClose} className="close-button">Закрыть</button>
        </div>
    );
};

export default Shop;
