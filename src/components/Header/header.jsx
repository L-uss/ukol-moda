import React from 'react'; //''
import './header.css';

const Header = ({title}) => {
  return(
    <div className='header'>
        <h1 className='title'>{title}</h1>
        <p className='description'>Stylové oblečení a doplňky pro každý den</p>
    </div>
  )
}

export default Header;