import React from 'react';
import Banner from './../Banner/Banner';
import useServices from './../../../hooks/useServices';
import Service from './../Service/Service';
import './Home.css'

const Home = () => {
  const [services,setServices] = useServices(); 
  return (
    <div className=''>
      <Banner></Banner>
     <div className="tutor-course">
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
    </div>
  );
};

export default Home;