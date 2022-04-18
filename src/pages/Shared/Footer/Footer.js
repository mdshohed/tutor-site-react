import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className="d-flex pt-3">
          <div className="me-5">
            <h5 className='text-white'>Our Service</h5>
            <div className="our-service">
            <p><a href="">Learn HTML</a></p>
            <p><a href="">Learn NodeJS</a></p>
            <p><a href="">Learn Django</a></p>
            <p><a href="">Learn Angular</a></p>
            </div>
          </div>
          <div className="border-line"></div>
          <div className="ms-5">
            <h5 className='text-white'>Our Help</h5>
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            <p className='text-info'>Facebook</p>
            <p className='text-info'>Whatsapp</p>
            <p className='text-info'>Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;