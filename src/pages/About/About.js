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
        <h6><a className='text-decoration-none' href="http://gmail.com">Email: mdshohed170@gmail.com</a></h6>
        <p>It's Shohedul Islam. I am a Student of CSE from Southeast University. I have 3 years experience in Problem solving and strong knowledge of Competitive Programming. I learn React project for future for backend. future i want to be a good developer. I have completed many projects for the Class assignments.</p>
      </div>
    </div>
  );
};

export default About;