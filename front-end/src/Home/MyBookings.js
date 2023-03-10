import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyBookings.css'

export default function MyBookings(props) {

  const [bookings, setBookings] = useState([]);
     
   const userId=props.userId

  useEffect(() => {
    fetchBookings();
    }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/api/v6/mybookings/${userId}`);
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
  <div>
    <h2>Your bookings:</h2>
    <table>
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>Flight ID</th>
          <th>Passenger Name</th>
          <th>Passenger Age</th>
          <th>Passenger Gender</th>
          <th>Source</th>
          <th>Departure Time</th>
          <th>Destination</th>
          <th>Arrival Time</th>
          <th>Flight Date</th>
          <th>Flight Duration</th>
          <th>Plane Name</th>
          <th>Price</th>
          <th>Seat</th>
          <th>Booked At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.booking_id}>
            <td>{booking.booking_id}</td>
            <td>{booking.flight_id}</td>
            <td>{booking.passenger_name}</td>
            <td>{booking.passenger_age}</td>
            <td>{booking.passenger_gender}</td>
            <td>{booking.source}</td>
            <td>{booking.departure_time}</td>
            <td>{booking.destination}</td>
            <td>{booking.arrival_time}</td>
            <td>{booking.flight_date}</td>
            <td>{booking.flight_duration}</td>
            <td>{booking.plane_name}</td>
            <td>{booking.price}</td>
            <td>{booking.seat}</td>
            <td>{booking.booked_at}</td>
            <td>
              <button className='update'>Update
              </button>
              <button >Cancel</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
}
