import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import './Userlogin.css';

export default function Userlogin(){
  

    const [uname,setuname]=useState('');
    const [upassword,setupassword]=useState('');

    const navigate = useNavigate();

    const sendDataToAPI = async(event) => {
      event.preventDefault();
      try{
        const response= await axios.get(`http://localhost:9991/api/v6/validate/${uname}/${upassword}`)
        const userId=response.data.valueOf()
        if (userId) {
          console.log(userId)
          navigate('/Home',{ state: { userId:userId } });
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
        <h2>Login</h2>
          <label>Name</label>
          <input name="username" 
          onChange={(e) => setuname(e.target.value)} 
          placeholder='Name' />
        </div>
        <div>
          <label>Password</label>
          <input name="userpassword"  type="password"
          placeholder='Password' 
          onChange={(e) => setupassword(e.target.value)} 
          />
        </div>
        <button type='submit' onClick={sendDataToAPI}>Submit</button>
      </form>
      </div>
    </body>
  );
}
