import React from 'react';
import './Orderdetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Orderdetails = ({Items}) => {
    return (
        <div className='singleItem'>
           <div className='right-side'>
              <img src={Items.img} alt="" />
           </div>
           <div className='left-side'>
              <div className='left-side-text'>
                <h2> {Items.name}</h2>
                <h4> Price: {Items.price}</h4>
                <p> {Items.quantity}</p>
              </div>
             
                 <button  className='delete-b'>
                 <FontAwesomeIcon className=' delete-icon' icon={faTrash} /> 
                 </button>
        
           </div>
        </div>
    );
};

export default Orderdetails;