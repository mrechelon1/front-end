import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FrontStyle.css';
import Navbar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import API_URL from '../api/api_route';

function RegForm() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = await fetch('http://127.0.0.1:8000/new_user/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name, username, password, status}),
                });
                 if (response.ok) {
                    // Handle successful registration
                    
                    alert('Data Submtted Successfully')
                    navigate('/about');
                } else {
                    // Handle registration error
                     alert('Data not Submtted. Username has been used')
                }
            } catch (error) {
                // Handle network error
                 alert(error)
            }
        };

  return (
    <div>
        <Header />
        <Navbar />
        <div className='contain'>
           
            
            <div className='contain2'>
              <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
              
            
                <div className='contain3'>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required
                  />
                 
                  <label htmlFor="lastName">UserName:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                  />
                
                  <label htmlFor="email">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                  />
               
                  <label htmlFor="password">Status:</label>
                  <select name='status' required onChange={(e) => setStatus(e.target.value)}>
                    
                    <option defaultValue="">Select option</option>
                    <option value="Not Active">Not Active</option>
                    <option value="Active">Active</option>
                  </select>

                  
               
                  <button type="submit">Register</button>
                </div>
              </form>
            
              <h2>Or Login from <a href='#'>Here</a></h2>
            </div>
        </div>
     
        <Footer />   
        <ToastContainer />
    </div>
  );
}

export default RegForm;
