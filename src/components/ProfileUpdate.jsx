import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FrontStyle.css';
import Navbar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import API_URL from '../api/api_route';


function UserUpdate () {
      const navigate = useNavigate();
      const token = localStorage.getItem('access_token'); // Retrieve token from local storage
      const [user, setUser] = useState(null);
      const [formData, setFormData] = useState({
            name: '',
            username: '',
            password: '',
            status: '',
        });
      
    
      useEffect(() => {
        const fetchData = async () => {
          try {
        const response = await axios.get('http://localhost:8000/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });      
            //const data = await response.json();
            setUser(response.data);
            setFormData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [token]);
    
      if (!user) {
        return <div>Loading...</div>;
      }
    const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value });
        };
    
       

        const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const response = await axios.put(`http://127.0.0.1:8000/updateprofile`, formData, {
             headers: { Authorization: `Bearer ${token}` },
             });
            console.log('Profile updated:', response.data);
             alert('User Updated successfully');
             navigate('/profile');
        // Update UI
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile:', error.message);
            // Handle error
        }
        };

  return (
    <>
    <div>
        <Header />
        <Navbar />
        <div className='contain'>
                      
            <div className='contain2'>
              <form onSubmit={handleSubmit}>
                             
                <div className='contain3'>
                   <h2 style={{padding:'10px', color: 'grey', border:'solid 1px'}}>User Profile Update</h2>
                   <h2 align="left">Profle Name:<strong> {user.name}</strong></h2>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    required
                  />
                 
                  <label htmlFor="lastName">UserName:</label>
                  <input
                    type="email"
                    id="username"
                    name="username"
                    value={formData.username || ''}
                    onChange={handleChange}
                    required
                    readOnly
                  />
                
                  <label htmlFor="email">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password || ''}
                    onChange={handleChange}
                    required
                  />
               
                  <label htmlFor="password">Status:</label>
                  <select name='status' required onChange={handleChange}>
                    
                    <option defaultValue={formData.status}>{formData.status}</option>
                    <option value="Not Active">Not Active</option>
                    <option value="Active">Active</option>
                  </select>
               
                  <button type="submit">Update User</button>
                </div>
              </form>
            
              <h4>View All Users<a href='/about'> Here</a></h4>
            </div>
        </div>
     
        <Footer />   
        <ToastContainer />
    </div>
    </>
  );
}

export default UserUpdate;