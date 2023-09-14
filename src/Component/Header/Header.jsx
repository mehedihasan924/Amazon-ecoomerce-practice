import React from 'react';
import './Header.css'
import Logo from '../../Image/amazon-logo.png'
const Header = () => {
    return (
        <nav className='header'>
             <img src={Logo} alt="" />
            <div>
            <a href="#"> Home</a> 
             <a href="#"> Shop</a>
             <a href="#"> Contact</a>
             <a href="#"> Login</a>
            </div>
        </nav>
    );
};

export default Header;