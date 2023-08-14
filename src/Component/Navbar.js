// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from './images/logo.jpg'


const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(true);
    if (showNotification===true) {setShowNotification(false)}
 // Hide notification after 3 seconds
  };

  return (
    <div className="navbar">
      <img className='h-12 border rounded-xl' src={logo}/>
      <button className="h-10 w-44 border-0 rounded-md bg-sky-400" onClick={handleNotificationClick}>
        Show Notification
      </button>
      {showNotification && (
        <div className="notification">
          <h2>Appointment Request</h2>
          <p>Source: Dr.Steve</p>
          <p>Date: 12/09/2023</p>
          <p>Time: 15:00 hrs</p>
          <p>Patient: Mr.Peter Campos</p>
          <p>Email: peterC_______@_mail.c_m</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;