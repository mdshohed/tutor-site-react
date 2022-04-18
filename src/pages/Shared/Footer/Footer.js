import React from 'react';
import logo from '../../../images/icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className="footer container">
        <div className="d-flex">
          <img style={{width:'40px',height:'40px'}} src={logo} alt="" />
          <div className="d-flex text-white"><h5>Programming-<span className='text-danger'>Tutor</span> | </h5>
          <p className='ms-2'>Developed by ©Programming tutor</p></div>
        </div>
        <div className="d-flex">
          <div className="me-3">
            <h4 className='text-white'>Our Service</h4>
            <div className="our-service">
            <p> <a href="">Learn HTML</a></p>
            <p><a href="">Learn NodeJS</a></p>
            <p><a href="">Learn Django</a></p>
            <p><a href="">Learn Angular</a></p>
            </div>
          </div>
          <div className="">
            <h5>Our Help</h5>
            <ul>
              <li>Learn HTMl</li>
              <li>Learn Django</li>
              <li>Learn Node.js</li>
              <li>Learn Angular</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;