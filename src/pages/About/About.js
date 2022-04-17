import React from 'react';
import avator from '../../images/avator.png'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='container w-50 mt-5'>
      {/* <h5>To Know About Me</h5> */}
      <div className="text-left">
        <img className='rounded-circle' style={{width:'100px'}} src={avator} alt="" />
        <h5>Shohedul islam</h5>
        <h6><a className='text-decoration-none' href="http://gmail.com">mdshohed170@gmail.com</a></h6>
        <p>Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. I appreciate your time and try hard to reply to every single message posted here! Keep dropping your priceless opinions. <span className='text-primary'>Read more...</span></p>
      </div>
    </div>
  );
};

export default About;