import React, { useState } from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './../../../Shared/Loading/Loading';


const Register = () => {
  const [agree, setAgree] = useState(false); 
  const navigate = useNavigate(); 

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  
  if(loading) {
    return <Loading></Loading>
  }
  
  const navigateLogin = () =>{
    navigate('/home'); 
  }

  const handleRegister = (event) =>{
    event.preventDefault();
    const name = event.target.name.value; 
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email,password); 
    console.log(user);
    console.log('registration successful'); 
    navigate('/home'); 
  } 

  return (
    <div className='register-form mt-5'>
      <h2 style={{textAlign:'center', marginTop:'20px'}}>Please register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder='Enter your name' required/>
        <input type="email" name="email" id="" placeholder='Enter your email'  required/>
        <input type="password" name="password" id="" placeholder='Password' required/>
        <input
         onClick={()=>setAgree(!agree)}
         type="checkbox" name="terms" id="" />
        <label className={`ps-2 ${agree?'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Programming tutor Terms and Conditions</label>
        <p style={{color:'red'}}>{error?.message}</p>
        {
          loading && <p>Loading...</p>
        }
        <input 
        disabled={!agree}
        className='mx-auto w-50 btn btn-primary mt-2' type="submit" value="Register" />
      </form>
      <p>Already have an account? <Link to="/login" onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
      {/* <SocialLogin></SocialLogin> */}
    </div>
  );
};

export default Register;