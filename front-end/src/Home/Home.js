import React, { useState } from 'react';
import './Home.css';

const airports = [
  { city: 'New York City', airport: 'JFK' },
  { city: 'Los Angeles', airport: 'LAX' },
  { city: 'Chicago', airport: 'ORD' },
  { city: 'San Francisco', airport: 'SFO' },
  { city: 'Dallas', airport: 'DFW' },
];

export default function Home() {
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');

  const handleFromChange = (e) => {
    setFromAirport(e.target.value);
  };

  const handleToChange = (e) => {
    setToAirport(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Search for flights from ${fromAirport} to ${toAirport}`);
  };

  return (
    <div>
      {/* Flight Reservation System */}
      <div className="header">
        <h1 className="title">Flight Reservation System</h1>
      </div>

      {/* Navigation bar */}
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">My Bookings</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">My Profile</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Logout</a>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="container">
        <div className="box">
          <label htmlFor="from" className="label">From:</label>
          <select id="from" value={fromAirport} onChange={handleFromChange} className="select">
            <option value="">Select an airport</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport.airport}>
                {airport.city} ({airport.airport})
              </option>
            ))}
          </select>
        </div>
        <div className="box">
          <label htmlFor="to" className="label">To:</label>
          <select id="to" value={toAirport} onChange={handleToChange} className="select">
            <option value="">Select an airport</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport.airport}>
                {airport.city} ({airport.airport})
              </option>
            ))}
          </select>
        </div>
        <div className="box">
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}
