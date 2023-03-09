import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Userdashboard.css'


function Userdashboard() {

  const location = useLocation();
  const userId = location.state?.userId;
  console.log("id is "+userId)
  
    return (
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="logo">Flight Reservation System</Link>
            <ul id="nav-bar" className="right">
            <Link to={{pathname: "/Home", state: { userId: userId }}}>HOME</Link>
              <li><Link to="">My Bookings</Link></li>
              <li><Link to="">My Profile</Link></li>
              <li><Link to="">LOGOUT</Link></li>
            </ul>
          </div>
        </nav>
      );
    }

export default Userdashboard;

