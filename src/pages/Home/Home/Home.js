import React from 'react';
import Banner from './../Banner/Banner';
import useServices from './../../../hooks/useServices';
import Service from './../Service/Service';
import './Home.css'
import Footer from './../../Shared/Footer/Footer';

const Home = () => {
  const [services,setServices] = useServices(); 
  return (
    <div className=''>
      <Banner></Banner>
      <div className="tutor-course mt-5">
        <h3 className='fw-bold text-center'>Tutor Service</h3>
        <div className="main-service">
          <div className="service">
            {
              services.slice(0,3).map(service=><Service
              key={service.id}
              service={service}
              ></Service>)
            }
          </div>
        </div>
      </div>
      <div className="tutor-help d-flex justify-content-center">
        <div className="">
          <h3 className="text-white p-2">Get Live Coding Help from a Tutor Now</h3>
          <div className="text-center p-2"><button className='btn text-white p-2' id='custom-btn'>Meet Tutor Now</button></div>
        </div>
      </div>
    </div>
  );
};

export default Home;