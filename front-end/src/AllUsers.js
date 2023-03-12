import { useState, useEffect } from 'react';
import axios from 'axios';
import './AllUsers.css'


export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9991/api/v6/users`)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => console.error(error))
  }, []);

  const handleUpdateUser = (id, name, email, password) => {
    axios
      .put(`http://localhost:9991/api/v6/updateuser/${id}`, {
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

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:9991/api/v6/user/delete/${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.uid !== id));
        alert("Profile Deleted");
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateChange = (id, field, value) => {
    setUsers(users.map((user) => {
      if (user.uid === id) {
        return { ...user, [field]: value }
      }
      return user;
    }))
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.uid}>
            <td>{user.uid}</td>
            <td><input type="text" value={user.uname} onChange={(e) => handleUpdateChange(user.uid, 'uname', e.target.value)} /></td>
            <td><input type="text" value={user.uemail} onChange={(e) => handleUpdateChange(user.uid, 'uemail', e.target.value)} /></td>
            <td><input type="text" value={user.upassword} onChange={(e) => handleUpdateChange(user.uid, 'upassword', e.target.value)} /></td>
            <td>
              <button className='update' onClick={() => handleUpdateUser(user.uid, user.uname, user.uemail, user.upassword)}>Update</button>
              {updateStatus && <p>{updateStatus}</p>}
              <button className='delete' onClick={() => handleDeleteUser(user.uid)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



// uid: usid,
//         passenger_name:name,
//         passenger_age:age,
//         passenger_gender:gender,
//         flight_id:fid,
//         source:s,
//         destination:d,
//         departure_time:dt,
//         arrival_time:at,
//         flight_date:fd,
//         flight_duration: fdu,
//         plane_name:pn,
//         price:pr,
//         seat:st