import React, { useState } from 'react';
import './Home.css';
import { useLocation } from 'react-router-dom';
import Schedule from './Schedule'
import './Schedule.css'
import MyBookings from './MyBookings';
import MyProfile from './MyProfile';


export default function Home() {

  const location = useLocation();
  const userId = location.state?.userId;
  console.log("id is "+userId)
  
  const airports = [
    { city: 'New York City', airport: 'JFK' },
    { city: 'Los Angeles', airport: 'LAX' },
    { city: 'Chicago', airport: 'ORD' },
    { city: 'San Francisco', airport: 'SFO' },
    { city: 'Dallas', airport: 'DFW' },
  ];
  
  const today = new Date().toString().split('T')[0];

  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const [showSchedule, setShowSchedule] = useState(false);
  const [showBookings, setShowBookings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
 
  console.log(today)
  
  const handleFromChange = (e) => {
    setFromAirport(e.target.value);
  };

  const handleToChange = (e) => {
    setToAirport(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Search for flights from ${fromAirport} to ${toAirport} on ${date}`);
    setShowSchedule(!showSchedule);
  };

  const handlMyBookings = () => {
    setShowBookings(!showBookings);
  };

  const handlMyProfile = () => {
    setShowProfile(!showProfile);
  };


  return (
    <div>
      <div style={{display: "flex"}}>
       <button onClick={handlMyBookings} className="button1" >My Bookings</button>{showBookings}
       <button onClick={handlMyProfile} className="button2">My Profile</button>{showProfile}
       <button className="button3">Logout</button>
     </div>
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
          <label htmlFor="date" className="label">Date:</label>
          <input type="date" id="date" value={date} min={today} onChange={handleDateChange} className="date-input" />
        </div>
        <div className="box">
          <button onClick={handleSearch} className="search-button">Search</button>
          {showSchedule}
        </div>
      </div>
      <div>{showSchedule && <div><Schedule userId={userId} fromAirport={fromAirport} toAirport={toAirport} date={date}/>
      </div>}
      </div>
      <div>
      {showBookings && <div><MyBookings userId={userId}/>
      </div>}
      </div>
      <div>
      {showProfile && <div><MyProfile userId={userId}/>
      </div>}
      </div>
      </div>
  );
}
