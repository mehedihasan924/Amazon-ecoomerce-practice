import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../Image/amazon-logo.png'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';




const Header = () => {
   
    const {user, logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(result=>{})
        .catch(error=>console.error(error))
    }

    return (
        <nav className='header'>
             <img src={Logo} alt="" />
            <div>    
            <ActiveLink to="/">Shop </ActiveLink>
            <ActiveLink to="/contact">Contact </ActiveLink>
            <ActiveLink to="/order">Order <span>  </span> </ActiveLink>
            <ActiveLink to="/signup">Sign Up </ActiveLink>
            <ActiveLink to="/login">Login </ActiveLink>
      {
         user ?<> <Link to="/login"><button style={{padding:'5px 10px', color:"white", backgroundColor:"blue"}} onClick={handleLogOut}> Log Out </button> </Link>    {user.email}  </>   
           : <Link to="/signup"> <button style={{padding:'5px 10px',color:"white", backgroundColor:"blue"}} onClick={handleLogOut}>  Sign Up </button> </Link> 
      }
            
      
            </div>
         
           
        </nav>
    );
};

export default Header;