import React from 'react';
import coinImage from './C.png';
import './coin.css';

const Coindiv = (setCoins, setClicks, setEnergyNow, coins, coinPerClick, energyNow) => {

//Нажатие на монету
const handleCoinClick = () => {
    if (energyNow >= coinPerClick) {
      setCoins(coins + coinPerClick);
      setClicks(clicks + 1);
      setEnergyNow(energyNow - coinPerClick);
    }
  };

return(
<div className='Podsos' >
    <img src={coinImage} alt="Coin" height="70%" onClick={handleCoinClick}/>
</div>
)
};
export default Coindiv;