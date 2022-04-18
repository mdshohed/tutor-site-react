import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const Service = ({service}) => {
  const {id,img, title, description, Price} = service;  
  const navigate = useNavigate(); 
  const [user] = useAuthState(auth); 

  const handleCheckout = (id) =>{
    console.log(id); 
    if(user) {
      navigate(`/checkout/${id}`); 
    }
    else {
      navigate('/login'); 
    }
  }
  return (
    <div className="">
      <div className='w-75 service-card mb-3 container'>
        <img className='w-100 mb-2' src={img} alt="" />
        <div className="service-text">
          <h5>{title}</h5>
          <p>{description}</p>
          <h4>${Price}</h4>
        </div>
        <button onClick={()=>handleCheckout(id)} className='btn text-white w-50 checkout' id='custom-btn'>Checkout</button>
      </div>
    </div>
  );
};

export default Service;