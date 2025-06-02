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


function SearchUser () {
        //const {userid} = useParams();
        const [item, setItem] = useState(null);
        const [itemId, setItemId] = useState('');

        const fetchData = async () => {
        try{
            const response = await fetch(`http://localhost:8000/profile/${itemId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItem(data);
        } catch (error) {
            console.error("Could not fetch the item:", error);
        setItem(null);
        }
  };

  return (
    <>
    <div>
        <Header />
        <Navbar />
        <div className='contain'>
                      
            <div className='contain2'>
              
                <div>
                    <h2>Search User by ID:</h2>
                <input
                type="text"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
                placeholder="Enter User ID"
                />
                <button onClick={fetchData}>Get User</button>
                {item && (
                <div>
                <h2>User Details:</h2>
                <p align="left">Name: <strong>{item.name}</strong></p>
                <p align="left">E-mail: <strong>{item.username}</strong></p>
                <p align="left">Status: <strong>{item.status}</strong></p>
            </div>
      )}
       {!item && itemId && (
        <div>
          <p>User not found.</p>
        </div>
      )}
    </div>

            
              <h4>View All Users<a href='/about'> Here</a></h4>
            </div>
        </div>
     
        <Footer />   
        <ToastContainer />
    </div>
    </>
  );
}

export default SearchUser;
