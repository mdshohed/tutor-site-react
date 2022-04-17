import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef(''); 
  const passwordRef = useRef(''); 
  const navigate = useNavigate(); 
  const location = useLocation(); 

  
  return (
    <div className='container w-50 mx-auto mt-5'>
    <h2 className='text-center text-primary'>Please Login</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary w-50 mx-auto d-block mb-2 " type="submit">
        Submit
      </Button>
    </Form>
    <p className='text-center'>New to Programming tutor? <Link to="/register"  className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
    <p className='text-center'>Forget Password? <button to="/register"  className='text-primary btn btn-link pe-auto text-decoration-none'>Reset Password</button></p>
    {/* <SocialLogin></SocialLogin> */}
    {/* <ToastContainer /> */}
  </div>
  );
};

export default Login;