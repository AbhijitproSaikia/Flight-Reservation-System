import React, { useState } from 'react';
import axios from 'axios';
import './booking.css';


export default function Booking(){
    
  const [booking, setBooking] = useState({
    flight_id: '',
    passenger_name: '',
    passenger_age: '',
    passenger_gender: '',
    source: '',
    departure_time: '',
    destination: '',
    arrival_time: '',
    flight_date: '',
    flight_duration: '',
    plane_name: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8888/api/v6/newbooking', booking)
      .then(response => {
        console.log(response);
        // do something with the response, e.g. show a success message
      })
      .catch(error => {
        console.log(error);
        // do something with the error, e.g. show an error message
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>From:</label>
        <input type="text" name="source" value={booking.source} onChange={handleInputChange} />
      </div>
      <div>
        <label>To:</label>
        <input type="text" name="destination" value={booking.destination} onChange={handleInputChange} />
      </div>
      <div>
        <label>Flight ID:</label>
        <input type="text" name="flight_id" value={booking.flight_id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Passenger Name:</label>
        <input type="text" name="passenger_name" value={booking.passenger_name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Passenger Age:</label>
        <input type="number" name="passenger_age" value={booking.passenger_age} onChange={handleInputChange} />
      </div>
      <div>
        <label>Passenger Gender:</label>
        <select name="passenger_gender" value={booking.passenger_gender} onChange={handleInputChange}>
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label>Departure Time:</label>
        <input type="text" name="departure_time" value={booking.departure_time} onChange={handleInputChange} />
      </div>
      <div>
        <label>Arrival Time:</label>
        <input type="text" name="arrival_time" value={booking.arrival_time} onChange={handleInputChange} />
      </div>
      <div>
        <label>Flight Date:</label>
        <input type="text" name="flight_date" value={booking.flight_date} onChange={handleInputChange} />
      </div>
      <div>
        <label>Flight Duration:</label>
        <input type="text" name="flight_duration" value={booking.flight_duration} onChange={handleInputChange} />
      </div>
      <div>
        <label>Plane Name:</label>
        <input type="text" name="plane_name" value={booking.plane_name} onChange={handleInputChange} />
      </div>
      <div className="box">
          <button onClick={handleSubmit} className="submit">Submit</button>
        </div>
      </form>
)}