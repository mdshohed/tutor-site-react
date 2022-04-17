import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from './../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef(''); 
  const passwordRef = useRef(''); 
  const navigate = useNavigate(); 
  

  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/'; 

  if(loading||sending) {
    return <Loading></Loading>
  }

  if (error) {
    errorElement = <div>
      <p className='text-danger'>Error: {error?.message}</p>
    </div>
  }

  if(user){
    
    navigate(from, {replace:true}); 
    toast('Successfully login');
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();
    const email = emailRef.current.value; 
    const password = passwordRef.current.value; 
    await signInWithEmailAndPassword(email, password); 

    if(user) {
      navigate('/home'); 
      toast('Successfully login');
    }
  }
  const resetPassword = async()=>{
    const email = emailRef.current.value; 
    if(email) {
      await sendPasswordResetEmail(email); 
      toast('Send email');
    }
    else {
      toast('Please Inter your email address'); 
    }
  }
  return (
    <div className='container w-50 mx-auto mt-5'>
    <h2 className='text-center text-primary'>Please Login</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      <p className='text-danger'>{error?.message}</p>
      <Button variant="primary w-50 mx-auto d-block mb-2 " type="submit">
        Login
      </Button>
    </Form>
    <p className='text-center'>New to Programming tutor? <Link to="/register"  className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
    <p className='text-center'>Forget Password? <button to="/register"   className='text-primary btn btn-link pe-auto text-decoration-none'>Reset Password</button></p>
    <SocialLogin></SocialLogin>
    <ToastContainer />
  </div>
  );
};

export default Login;