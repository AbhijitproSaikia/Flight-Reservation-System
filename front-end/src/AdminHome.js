import React, { useState } from 'react';
import './AdminHome.css';
import { useLocation } from 'react-router-dom';
import AllBookings from './AllBookings';
import AllUsers from './AllUsers';
// import MyBookings from './MyBookings';
// import MyProfile from './MyProfile';


export default function Home() {

  const location = useLocation();
  const userId = location.state?.userId;
  console.log("id is "+userId)
  
  const [showAllBookings, setShowAllBookings] = useState(false);
  const [showAllUsers, setShowAllUsers] = useState(false);

  const handlAllBookings = () => {
    setShowAllBookings(!showAllBookings);
  }

  const handleAllUsers = () => {
    setShowAllUsers(!showAllUsers);
  };


  return (
    <div>
      <div style={{display: "flex"}}>
       <button  onClick={handlAllBookings}  className="button1" >All Bookings</button>{showAllBookings}
       <button  onClick={handleAllUsers} className="button2">All Users</button>{showAllUsers}
       <button className="button3">Logout</button>
     </div>
     <div>{showAllBookings && <div><AllBookings/></div>}</div>
     <div>{showAllUsers && <div><AllUsers/></div>}</div>
      </div>
  );
}
