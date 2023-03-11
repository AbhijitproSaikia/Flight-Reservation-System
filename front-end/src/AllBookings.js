import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllBookings.css'

export default function AllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8888/api/v6/allbookings')
      .then(response => setBookings(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>User ID</th>
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
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => (
          <tr key={booking.booking_id}>
            <td>{booking.booking_id}</td>
            <td>{booking.uid}</td>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}

