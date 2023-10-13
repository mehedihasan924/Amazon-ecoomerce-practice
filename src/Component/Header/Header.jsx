import React from 'react';
import './Header.css'
import Logo from '../../Image/amazon-logo.png'
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav className='header'>
             <img src={Logo} alt="" />
            <div>
      
            <ActiveLink to="/">Shop </ActiveLink>
            <ActiveLink to="/contact">Contact </ActiveLink>
            <ActiveLink to="/order">Order </ActiveLink>
            <ActiveLink to="/login">Login </ActiveLink>
           
            </div>
        </nav>
    );
};

export default Header;