import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';


export default function Booking(props){
    

  const userId = props.userId;
  const fromAirport = props.fromAirport;
  const toAirport = props.toAirport;
  const date = props.date;
  const dtime=props.departureTime
  const atime=props.arrivalTime
  const fduration=props.flightDuration
  const pname =props.planeName
  const fid = props.flightId
  const pprice = props.t_price


  console.log("In booking:"+userId)
  console.log(fromAirport)
  console.log(toAirport)
  console.log(date)
  console.log(dtime)
  console.log(atime)
  console.log(fduration)
  console.log(pname)
  console.log(fid)
  console.log(pprice)





  const [booking, setBooking] = useState({
    uid:userId,
    flight_id: fid,
    passenger_name: '',
    passenger_age: '',
    passenger_gender: '',
    seat:'',
    source: fromAirport,
    departure_time: dtime,
    destination: toAirport,
    arrival_time: atime,
    flight_date: date,
    flight_duration: fduration,
    plane_name: pname,
    price:pprice
  });

  console.log("uid= "+booking.uid)

  const handleInputChange = (event) => {  
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8888/api/v6/newbooking', booking)
      .then(response => {
        console.log(response);
        alert("Flight Booked")
        
      })
      .catch(error => {
        console.log(error);
        alert("Error")
      });
  };




  return (
    <form >
     
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
        <label>Select Seat:</label>
       <select name="seat" value={booking.seat} onChange={handleInputChange}>
          <option value="">-- Select Seat --</option>
              {Array.from({length: 300}, (_, i) => i+1).map((seatNumber) => (
              <option key={seatNumber} value={seatNumber}>{seatNumber}</option>
               ))}
         </select>
        </div>
      <div className="box">
          <button onClick={handleSubmit} className="submit">Submit</button>
        </div>
      </form>
)}