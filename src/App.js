// App.js
import React, { useState, useEffect } from 'react';
import Coin from './coin';
import Shop from './shop';
import ProgressBar from './ProgressBar';
import Modal from './modal';
import ReferalModal from './ReferalModal';
import './App.css';

function App() {
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem('coins');
    return savedCoins ? parseInt(savedCoins, 10) : 0;
  });
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReferalOpen, setIsReferalOpen] = useState(false);
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('clicks');
    return savedClicks ? parseInt(savedClicks, 10) : 1000;
  });
  const [userId, setUserId] = useState(() => {
    const savedUserId = localStorage.getItem('userId');
    if (savedUserId) {
      return savedUserId;
    }
    const newUserId = `user-${Date.now()}`;
    localStorage.setItem('userId', newUserId);
    return newUserId;
  });

  const [referralLink, setReferralLink] = useState('');

  const [coinPerClick, setCoinPerClick] = useState(() => {
    const savedCoinPerClick = localStorage.getItem('coinPerClick');
    return savedCoinPerClick ? parseInt(savedCoinPerClick, 10) : 1;
  });
  const [upgradeCost, setUpgradeCost] = useState(() => {
    const savedUpgradeCost = localStorage.getItem('upgradeCost');
    return savedUpgradeCost ? parseInt(savedUpgradeCost, 10) : 10;
  });
  const [upgradeLevel, setUpgradeLevel] = useState(() => {
    const savedUpgradeLevel = localStorage.getItem('upgradeLevel');
    return savedUpgradeLevel ? parseInt(savedUpgradeLevel, 10) : 1;
  });

  const [clickLimit, setClickLimit] = useState(() => {
    const savedClickLimit = localStorage.getItem('clickLimit');
    return savedClickLimit ? parseInt(savedClickLimit, 10) : 1000;
  });
  const [upgradeCostEnergy, setupgradeCostEnergy] = useState(() => {
    const savedUpgradeCostEnergy = localStorage.getItem('upgradeCostEnergy');
    return savedUpgradeCostEnergy ? parseInt(savedUpgradeCostEnergy, 10) : 500;
  });
  const [upgradeLevelEnergy, setUpgradeLevelEnergy] = useState(() => {
    const savedUpgradeLevelEnergy = localStorage.getItem('upgradeLevelEnergy');
    return savedUpgradeLevelEnergy ? parseInt(savedUpgradeLevelEnergy, 10) : 1;
  });

  useEffect(() => {
    const savedTimestamp = localStorage.getItem('lastUpdate');
    if (savedTimestamp) {
      const lastUpdate = parseInt(savedTimestamp, 10);
      const currentTime = Date.now();
      const timeDiff = Math.floor((currentTime - lastUpdate) / 3000);
      const additionalClicks = timeDiff * coinPerClick;
      setClicks(prevClicks => Math.min(prevClicks + additionalClicks, clickLimit));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('coins', coins);
  }, [coins]);

  useEffect(() => {
    localStorage.setItem('clicks', clicks);
  }, [clicks]);

  useEffect(() => {
    localStorage.setItem('coinPerClick', coinPerClick);
  }, [coinPerClick]);

  useEffect(() => {
    localStorage.setItem('upgradeCost', upgradeCost);
  }, [upgradeCost]);

  useEffect(() => {
    localStorage.setItem('upgradeLevel', upgradeLevel);
  }, [upgradeLevel]);

  useEffect(() => {
    localStorage.setItem('clickLimit', clickLimit);
  }, [clickLimit]);

  useEffect(() => {
    localStorage.setItem('upgradeCostEnergy', upgradeCostEnergy);
  }, [upgradeCostEnergy]);

  useEffect(() => {
    localStorage.setItem('upgradeLevelEnergy', upgradeLevelEnergy);
  }, [upgradeLevelEnergy]);

  useEffect(() => {
    const interval = setInterval(() => {
      setClicks(prevClicks => {
        const newClicks = Math.min(prevClicks + coinPerClick, clickLimit);
        localStorage.setItem('lastUpdate', Date.now());
        return newClicks;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [coinPerClick, clickLimit]);

  const checkSubscription = async () => {
    try {
      const response = await fetch('/check-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      });

      const data = await response.json();
      return data.isMember;
    } catch (error) {
      console.error('Error checking subscription:', error.message);
      return false;
    }
  };

  const handleCoinClick = () => {
    if (clicks >= coinPerClick) {
      setCoins(coins + coinPerClick);
      setClicks(clicks - coinPerClick);
    }
  };

  const handleOpenShop = () => {
    setIsShopOpen(true);
  };

  const handleCloseShop = () => {
    setIsShopOpen(false);
  };

  const handleUpgrade = () => {
    if (coins >= upgradeCost) {
      setCoins(coins - upgradeCost);
      setCoinPerClick(coinPerClick + 1);
      setUpgradeLevel(upgradeLevel + 1);
      setUpgradeCost(Math.floor(upgradeCost * 1.5));
    }
  };

  const handleUpgradeEnergy = () => {
    if (coins >= upgradeCostEnergy) {
      setCoins(coins - upgradeCostEnergy);
      setClickLimit(clickLimit * 2);
      setUpgradeLevelEnergy(upgradeLevelEnergy + 1);
      setupgradeCostEnergy(Math.floor(upgradeCostEnergy * 1.5));
    }
  };

  const handleEarn = () => {
    setIsModalOpen(true);
  };

  const handleReferal = () => {
    const link = `https://t.me/your_telegram_bot?start=${userId}`;
    setReferralLink(link);
    setIsReferalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseReferalModal = () => {
    setIsReferalOpen(false);
  };

  const handleCheckSubscription = async () => {
    const isSubscribed = await checkSubscription();

    if (isSubscribed) {
      setCoins(coins + 5000);
      alert('Спасибо за подписку! Вы получили 5000 монет.');
      setIsModalOpen(false);
    } else {
      alert('Пожалуйста, сначала подпишитесь на наш канал: https://t.me/GOGOGOGOGOGOGOGgogogooo');
    }
  };

  const handleReferralClick = (referralCode) => {
    if (referralCode === userId) {
      alert('Вы не можете использовать свой собственный реферальный код.');
      return;
    }

    fetch('/referral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, referralCode })
    })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setCoins(coins + 3000);
            alert('Вы и ваш друг получили по 3000 монет!');
          } else {
            alert('Ошибка при обработке реферального кода.');
          }
        })
        .catch(error => {
          console.error('Ошибка:', error);
          alert('Ошибка при обработке реферального кода.');
        });
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Кликер Игра</h1>
          <p>Монеты: {coins}</p>
          <p>Монет за клик: {coinPerClick}</p>
        </header>
        <div className="coin-container">
          <Coin onClick={handleCoinClick} coinPerClick={coinPerClick} clicks={clicks} />
        </div>
        <div className="progress-bar-container">
          <p>{clicks} / {clickLimit}</p>
          <ProgressBar current={clicks} max={clickLimit} />
        </div>
        <div className="controls">
          <div className="boost" onClick={handleOpenShop}>Boost 🚀</div>
          <div className="earn" onClick={handleEarn}>Earn 💰</div>
          <div className="referal" onClick={handleReferal}>Referal 👻</div>
        </div>
        {isShopOpen && (
            <Shop
                coins={coins}
                coinPerClick={coinPerClick}
                upgradeCost={upgradeCost}
                upgradeLevel={upgradeLevel}
                clickLimit={clickLimit}
                upgradeCostEnergy={upgradeCostEnergy}
                upgradeLevelEnergy={upgradeLevelEnergy}
                onClose={handleCloseShop}
                onUpgrade={handleUpgrade}
                onUpgradeEnergy={handleUpgradeEnergy}
            />
        )}
        {isModalOpen && (
            <Modal
                onClose={handleCloseModal}
                onCheckSubscription={handleCheckSubscription}
            />
        )}
        {isReferalOpen && (
            <ReferalModal
                userId={userId}
                referralLink={referralLink}
                onClose={handleCloseReferalModal}
            />
        )}
      </div>
  );
}

export default App;
