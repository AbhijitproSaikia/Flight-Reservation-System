import React, { useState } from 'react';
// import { Form, Button } from 'semantic-ui-react';
// import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import './userlogin.css';
// import Home from'C:\Users\asaik\Desktop\Axis Fintech Training\react\FRS-Test\frs_test\src\Home\Home.js';
export default function Userlogin(){
    const [uname,setuname]=useState('');
    const [upassword,setupassword]=useState('');

    const [response, setResponse] = useState(null);

      const sendDataToAPI = () => {
        axios.get(`http://localhost:9991/api/v6/validate/${uname}/${upassword}`)
        .then((res) => {
          setResponse(res.data);
          let user_id=res.data.valueOf()
          if (res.data.valueOf() === 0) {
            console.log('Invalid credentials');
          } else {
            console.log('Valid credentials');
            // history.push('/home');
          }
        })
        .catch((err) => {
          console.log(err);
        })
        
  }



  return(
    <body>
      <div>
      <form onSubmit={sendDataToAPI} style={{ backgroundImage: 'url(loginbackground.jpg)',width: '80%', maxWidth: '400px', margin: '0 auto', paddingLeft: '20px' }}>
        <div>
        <h2>Login</h2>
          <label>Name</label>
          <input name="username" 
          onChange={(e) => setuname(e.target.value)} 
          placeholder='Name' />
        </div>
        <div>
          <label>Password</label>
          <input name="userpassword" 
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