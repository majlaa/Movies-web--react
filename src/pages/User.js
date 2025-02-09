import axios from 'axios';
import React, { useEffect, useState } from 'react';
import maleIcon from '../assets/maleIcon.jpg';
import womanIcon from '../assets/womanIcon.jpg';
import '../styles/User.css'

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data); // Store users data in state
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err); // Log errors for debugging
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
 
  return (
    <div>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img
              className=" avatar w-50 h-80 m-0"
              src={user.gender === 'male' ? maleIcon : womanIcon}
              alt="User Icon"
              />
              <div className='userInfo'>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <hr />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;