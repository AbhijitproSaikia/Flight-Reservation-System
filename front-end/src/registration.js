import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function Registration(){
    const [uname,setuname]=useState('');
  const [upassword,setupassword]=useState('');
  const [uemail,setuemail]=useState('');
  

      const sendDataToAPI = () => {
        axios.post(`http://localhost:9991/api/v6/registration`, {
          uname,
          uemail,
          upassword
        }).then((response=>response.json()))

      alert("registerd successfully")

  }

  return(
      
      <div >
          <form>
        <Form.Field>
          <label>Name</label>
          <input name="username" 
          onChange={(e) => setuname(e.target.value)} 
          placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="useremail" 
          placeholder='Email' 
          onChange={(e) => setuemail(e.target.value)} 
          />
          </Form.Field>
          <Form.Field>
          <label>Password</label>
          <input name="userpassword" 
          placeholder='Password' 
          onChange={(e) => setupassword(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
      </form>

      </div>
  );
}