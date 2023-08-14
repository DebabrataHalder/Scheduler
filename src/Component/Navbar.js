// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(true);
    if (showNotification===true) {setShowNotification(false)}
 // Hide notification after 3 seconds
  };

  return (
    <div className="navbar">
      <h1 className="text-4xl font-semibold">MH GM </h1>
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