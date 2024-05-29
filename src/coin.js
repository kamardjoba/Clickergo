import React from 'react';
import coinImage from './C.png';
import './coin.css';

const Coindiv = (handleCoinClick) => {
    
return(
<div className='Podsos' >
    <img src={coinImage} alt="Coin" height="70%" onClick={handleCoinClick}/>
</div>
)
};
export default Coindiv;