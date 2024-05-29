import React from 'react';
import coinImage from './C.png';
import './coin.css';

const Coindiv = ( onClick ) => {


onClick();
return(
<div className='Podsos' >
    <img src={coinImage} alt="Coin" height="70%"/>
</div>
)
};
export default Coindiv;