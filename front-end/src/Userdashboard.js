import React from 'react';
import { Link } from 'react-router-dom';
import './Userdashboard.css'


function Userdashboard() {
    return (
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="logo">Flight Reservation System</Link>
            <ul id="nav-bar" className="right">
            <li><Link to="/Home">HOME</Link></li>
              <li><Link to="">My Bookings</Link></li>
              <li><Link to="">My Profile</Link></li>
              <li><Link to="">LOGOUT</Link></li>
            </ul>
          </div>
        </nav>
      );
    }

export default Userdashboard;

