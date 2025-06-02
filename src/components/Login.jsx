import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API_URL from '../api/api_route';
import './FrontStyle.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http:///127.0.0.1:8000/token', {
          username: username,
          password: password,
        }, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
          });
          
          localStorage.setItem('access_token', response.data.access_token);
          navigate('/profile');
    } catch (error) {
          console.error('Login failed', error);
          setError('Login failed. Please try again.');
          //alert('Login failed');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>User Login</h2>

        <div style={{padding:10}} className="form-container">
          
          {error && <div style={{ backgroundColor: 'red', color: '#fff', padding: 5 }} className="error-message">{error}</div>}

          <label htmlForm="email">Email:</label>
          <input
            type="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log In</button>
        </div>

        <div className="form-actions">
          <button type="button" className="cancelbtn">Login from here</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Login;
