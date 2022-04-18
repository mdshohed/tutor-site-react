import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='container'>
      <h2 className='p-4 border-bottom'>Programming tutor Blog</h2>
      <div className="w-75 blogs p-4 my-3">
        <h4>Difference between authorization and authentication?</h4>
        <p><span className='fw-bold'>Authorization: </span>Authorization determines what resources a user can access. Authorization isn’t visible to or changeable by the user. Authorization always takes place after authentication.</p>
        <p><span className='fw-bold'>Authentication: </span>Authentication verifies who the user is and an Authentication is visible to and partially changeable by the user.Authentication is the first step of a good identity and access management process.</p>
        
      </div>
      <div className="w-75 blogs p-4 my-3">
        <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
        <p>Firebase Authentication provides backend services where we can login or register by our email, facebook, github, and so on. </p>
      </div>
      <div className="w-75 blogs p-4 my-3">
        <h4>What other services does firebase provide other than authentication?</h4>
        <p>Firebase provide best authentication service. Also, there are many service which firebase provides, most useful of them are firebase database, realtime database, storage drive, hosting, Cloud Messaging, and so no. we can create custom hosting name my mine. for this firebase takes some cost. </p>
      </div>
    </div>
  );
};

export default Blogs;