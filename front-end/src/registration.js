import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function Registration(){
    const [uname,setuname]=useState('');
  const [upassword,setupassword]=useState('');
  const [uemail,setuemail]=useState('');
  

      const sendDataToAPI = (event) => {
        event.preventDefault()

        if (!uname.trim().match(/^[a-zA-Z\s]+$/)) {
          alert("Name should have minimum 1 space and characters only");
          return;
        }

        if (!uemail.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          alert("Enter Valid Email");
          return;
        }

        // if (!upassword.length<4) {
        //   alert("Password should be minimum of 4 characters");
        //   return;
        // }

        axios.post(`http://localhost:9991/api/v6/registration`, {
           uname,
           uemail,
          upassword
          }).then((response) => {
              alert("Registered successfully");
          }).catch((error) => {
                alert("Error registering user.");
          })

  }

  return(
      
      <div >
          <form>
          <h2>Register</h2>
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