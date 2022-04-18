import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from './../../firebase.init';

const CheckOut = () => {
  const [user,] = useAuthState(auth);
  const {checkoutId} = useParams(); 

  return (
    <div className='container'>
      <h2 className='text-center text-primary'>Welcome {user?.displayName}</h2>
      <h2>Welcome to Details: {checkoutId}</h2>
    </div>
  );
};

export default CheckOut;