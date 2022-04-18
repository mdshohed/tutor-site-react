import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Service from '../Home/Service/Service';
import auth from './../../firebase.init';
import useServices from './../../hooks/useServices';

const CheckOut = () => {
  // const [services, setServices] = useServices(); 
  const [user,] = useAuthState(auth);
  const {checkoutId} = useParams(); 

  return (
    <div className='container'>
      <h2 className='text-center text-primary mt-5'>Welcome {user?.displayName}</h2>
      <h5 className='text-center'>Welcome to our programming tutor course No: {checkoutId}</h5>
      <div className="text-center">
        <h5>Confirm Course: <button className='btn text-white' id='custom-btn'>Buy Now</button></h5>
      </div>
    </div>
  );
};

export default CheckOut;