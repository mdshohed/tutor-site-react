import React from 'react';
import './Service.css'

const Service = ({service}) => {
  const {img, title, description, Price} = service;  
  return (
    <div className="">
      <div className='w-75 service-card mb-3 container'>
        <img className='w-100 mb-2' src={img} alt="" />
        <div className="service-text">
          <h5>{title}</h5>
          <p>{description}</p>
          <h4>${Price}</h4>
        </div>
        <button className='btn text-white mb-2 w-50 checkout' id='custom-btn'>Checkout</button>
      </div>
    </div>
  );
};

export default Service;