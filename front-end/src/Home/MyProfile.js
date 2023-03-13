import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyProfile.css';

export default function UserProfile(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [updateStatus, setUpdateStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(null);

  const userId = props.userId;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9991/api/v6/user/${userId}`)
      .then((response) => {
        setUser(response.data);
        setName(response.data.uname);
        setEmail(response.data.uemail);
        setPassword(response.data.upassword);
        console.log(response.data.uname, response.data.uemail, response.data.upassword);
      })
      .catch((error) => console.error(error));
  },[userId] );

  const handleUpdateUser = () => {
    axios
      .put(`http://localhost:9991/api/v6/updateuser/${userId}`, {
        uname: name,
        uemail: email,
        upassword: password
      })
      .then((response) => {
        setUpdateStatus(response.data.message);
        alert("Profile Updated");
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteUser = () => {
    axios
      .delete(`http://localhost:9991/api/v6/user/delete/${userId}`)
      .then((response) => {
        setDeleteStatus(response.data.message);
        alert("Profile Deleted");
        navigate('/login');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {user && (
        <table className="profile-table">
          <tbody>
          <tr>
          <h2>User Profile</h2>
            </tr>
            <tr>
              <th>Name:</th>
              <td>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>Password:</th>
              <td>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>
              <button className='update' onClick={handleUpdateUser}>Update User</button>
                {updateStatus && <p>{updateStatus}</p>}
              </th>
              <td>
              <button className='delete' onClick={handleDeleteUser}>Delete User</button>
               {deleteStatus && <p>{deleteStatus}</p>}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
