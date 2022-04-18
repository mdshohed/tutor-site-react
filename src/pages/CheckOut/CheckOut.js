import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const CheckOut = () => {
  const [user,] = useAuthState(auth);
  if(user){
    console.log(user);  
  }
  return (
    <div className='container'>
      <h2>CheckOut Page</h2>
    </div>
  );
};

export default CheckOut;