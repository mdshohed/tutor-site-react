import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='container'>
      <h2 className='p-4 border-bottom'>Programming tutor Blog</h2>
      <div className="w-75 blogs p-4 my-3">
        <h4>Difference between authorization and authentication?</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam magnam at laborum a quibusdam, debitis ex architecto? Aperiam, explicabo?</p>
        <span className='text-primary'>Read More...</span>
      </div>
      <div className="w-75 blogs p-4 my-3">
        <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam magnam at laborum a quibusdam, debitis ex architecto? Aperiam, explicabo?</p>
        <span className='text-primary'>Read More...</span>
      </div>
      <div className="w-75 blogs p-4 my-3">
        <h4>What other services does firebase provide other than authentication?</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam magnam at laborum a quibusdam, debitis ex architecto? Aperiam, explicabo?</p>
        <span className='text-primary'>Read More...</span>
      </div>
    </div>
  );
};

export default Blogs;