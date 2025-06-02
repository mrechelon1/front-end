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
      const { userid } = useParams();
      const [item, setItem] = useState(null);
      const [formData, setFormData] = useState({
            name: '',
            username: '',
            password: '',
            status: '',
        });
      
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:8000/profile/${userid}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }           
            const data = await response.json();
            setItem(data);
            setFormData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [userid]);
    
      if (!item) {
        return <div>Loading...</div>;
      }
    const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            axios.put(`http://127.0.0.1:8000/updateuser/${userid}`, formData)
                .then(response => {
                    console.log('User updated:', response.data);
                    alert('User Updated successfully');
                    // Redirect or show success message
                    navigate('/about');
                })
                .catch(error => {
                    console.error('Error updating user:', error);
                    alert('Error updating user:', error.message);
                });
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
                   <h2 style={{padding:'10px', color: 'grey', border:'solid 1px'}}>User Update</h2>
                   <h2 align="left">User I.D:<strong> {userid}</strong></h2>
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
                    type="text"
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
                    value={formData.password}
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
