import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import './Userlogin.css';

export default function Adminlogin(){
  

    const [aname,setaname]=useState('');
    const [apassword,setapassword]=useState('');

    const navigate = useNavigate();

    const sendDataToAPI = async(event) => {
      event.preventDefault();
      try{
        const response= await axios.get(`http://localhost:8887/api/v6/adminvalidate/${aname}/${apassword}`)
        const adminId=response.data.valueOf()
        if (adminId) {
          console.log(adminId)
          navigate('/AdminHome',{ state: { adminId:adminId } });
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error(error);
        alert('Error.');
      }
    }

  return(
    <body >
      <div >
      <form className='login' style={{ width: '80%', maxWidth: '400px', margin: '0 auto', paddingLeft: '20px' }}>
        <div>
        <h2>Admin Login</h2>
          <label>Name</label>
          <input name="username" 
          onChange={(e) => setaname(e.target.value)} 
          placeholder='Name' />
        </div>
        <div>
          <label>Password</label>
          <input name="userpassword"  type="password"
          placeholder='Password' 
          onChange={(e) => setapassword(e.target.value)} 
          />
        </div>
        <button type='submit' onClick={sendDataToAPI}>Submit</button>
      </form>
      </div>
    </body>
  );
}
