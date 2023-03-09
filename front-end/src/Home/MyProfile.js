import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyProfile.css'

function UserProfile(props) {
  const [user, setUser] = useState(null);
  const userId=props.userId

  useEffect(() => {
    axios.get(`http://localhost:9991/api/v6/user/${userId}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [props.uid]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="profile-header">
        <h2>{user.uname}'s Profile</h2>
      </div>
      <table className="profile-table">
        <tbody>
          <tr>
            <th>Email:</th>
            <td>{user.uemail}</td>
          </tr>
          <tr>
            <th>Password:</th>
            <td>{user.upassword}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserProfile;
