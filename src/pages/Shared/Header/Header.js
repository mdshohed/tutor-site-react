import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth); 
  }
  return (
    <Navbar bg="light" expand="lg" className='main-nav'>
      <Container>
        <Navbar.Brand href="/" className='fw-bold'>Programming-<span className='text-danger'>Tutor</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ms-auto nav">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/login'>
              {
                user? 
                <Button id='custom-btn' className="btn me-3" onClick={handleSignOut}>LogOut</Button>
                :
                <div className="">
                  <Button as={Link} to='/login' id='custom-btn' className="btn me-3">Login</Button>
                </div>
              }
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;