import { useState,useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { useLocation,useNavigate } from 'react-router-dom';
import Schedule from './Schedule'
import './Schedule.css'
import MyBookings from './MyBookings';
import MyProfile from './MyProfile';


export default function Home() {

  const navigate = useNavigate();
  const location = useLocation();

  let userId = location.state?.userId;
  console.log("id is "+userId)
  
  useEffect(() => {
    if (!userId || userId === 0) {
      navigate('/login');
    }
  }, [userId, navigate]);
  
  const handleLogout = () => {
    userId=0
    localStorage.clear(); 
    navigate('/login');
  };

  const [airports, setAirports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8889/api/v6/airports')
      .then(response => setAirports(response.data))
      .catch(error => console.error(error));
  }, []);


  // const airports = [
  //   { city: 'New York City', airport: 'JFK' },
  //   { city: 'Los Angeles', airport: 'LAX' },
  //   { city: 'Chicago', airport: 'ORD' },
  //   { city: 'San Francisco', airport: 'SFO' },
  //   { city: 'Dallas', airport: 'DFW' },
  // ];
  
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
      {/* {(!userId || userId === 0) && navigate('/login')} */}
      <div style={{display: "flex"}}>
       <button onClick={handlMyBookings} className="button1" >My Bookings</button>{showBookings}
       <button onClick={handlMyProfile} className="button2">My Profile</button>{showProfile}
       <button className="button3" onClick={handleLogout}>Logout</button>
     </div>
      <div className="container">
        <div className="box">
          <label htmlFor="from" className="label">From:</label>
          <select id="from" value={fromAirport} onChange={handleFromChange} className="select">
            <option value="">Select an airport</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport.airport_name}>
                {airport.airport_name}
              </option>
            ))}
          </select>
        </div>
        <div className="box">
          <label htmlFor="to" className="label">To:</label>
          <select id="to" value={toAirport} onChange={handleToChange} className="select">
            <option value="">Select an airport</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport.airport_name}>
                {airport.airport_name}
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
