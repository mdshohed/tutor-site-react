import React from 'react';
import useServices from './../../../hooks/useServices';
import Service from './../Service/Service';

const Services = () => {
  const [services,setServices] = useServices(); 
  return (
    <div className='container mt-3'>
      <h3 className='text-center p-3'>Tutor All Services</h3>
      <div className="service">
          {
            services.map(service=><Service
            key={service.id}
            service={service}
            ></Service>)
          }
        </div>
    </div>
  );
};

export default Services;