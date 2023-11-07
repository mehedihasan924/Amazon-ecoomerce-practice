import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../Image/amazon-logo.png'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {
   
    const {user}=useContext(AuthContext)

    return (
        <nav className='header'>
             <img src={Logo} alt="" />
            <div>
      
            <ActiveLink to="/">Shop </ActiveLink>
            <ActiveLink to="/contact">Contact </ActiveLink>
            <ActiveLink to="/order">Order </ActiveLink>
            <ActiveLink to="/signup">Sign Up </ActiveLink>
            <ActiveLink to="/login">Login </ActiveLink>
      {
         user &&   <p> {user.email}</p>
      }
            
      
            </div>
        </nav>
    );
};

export default Header;