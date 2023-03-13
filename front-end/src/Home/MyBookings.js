import React, { useState, useEffect,useCallback } from 'react';
import axios from 'axios';
import './MyBookings.css'

export default function MyBookings(props) {

  const [bookings, setBookings] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(null);
     
  const userId = props.userId;

  const fetchBookings = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8888/api/v6/mybookings/${userId}`);
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [userId])

  useEffect(() => {
    fetchBookings();
  },[fetchBookings] );

  

  const handleUpdateBooking = (id,usid, name, age, gender,fid,s,d,dt,at,fd,fdu,pn,pr,st) => {
    axios
      .put(`http://localhost:8888/api/v6/updatebooking/${id}`, {
        uid: usid,
        passenger_name:name,
        passenger_age:age,
        passenger_gender:gender,
        flight_id:fid,
        source:s,
        destination:d,
        departure_time:dt,
        arrival_time:at,
        flight_date:fd,
        flight_duration: fdu,
        plane_name:pn,
        price:pr,
        seat:st
      })
      .then((response) => {
        setUpdateStatus(response.data.message);
        alert("Booking Updated");
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateChange = (id, field, value) => {
    setBookings(bookings.map((booking) => {
      if (booking.booking_id === id) {
        return { ...booking, [field]: value }
      }
      return booking;
    }))
  }




  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:8888/api/v6/booking/delete/${bookingId}`);
      fetchBookings();
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
              <td><input type="text" value={booking.passenger_name} onChange={(e) => handleUpdateChange(booking.booking_id, 'passenger_name', e.target.value)} /></td>
            <td><input type="number" value={booking.passenger_age} onChange={(e) => handleUpdateChange(booking.booking_id, 'passenger_age', e.target.value)} /></td>
            <td><input type="text" value={booking.passenger_gender} onChange={(e) => handleUpdateChange(booking.booking_id, 'passenger_gender', e.target.value)} /></td>
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
              <button className='update' onClick={() => handleUpdateBooking(
                booking.booking_id,
                booking.uid,
                booking.passenger_name,
                booking.passenger_age,
                booking.passenger_gender,
                booking.flight_id,
                booking.source,
                booking.destination,
                booking.departure_time,
                booking.arrival_time,
                booking.flight_date,
                booking.flight_duration,
                booking.plane_name,
                booking.price,
                booking.seat
              )}>Update</button>
              {updateStatus && <p>{updateStatus}</p>}
                <button onClick={() => handleCancelBooking(booking.booking_id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
