import Navbar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

  function About() {
      const [users, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //fetch DB
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/users');
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //delete data fro DB
  const handleDelete = async (id) => {
    try {
      const isConfirmed = confirm("Are you sure you want to delete this user ?")
      if (isConfirmed) {
        // Rest of your code
    
        const response = await fetch(`http://localhost:8000/del_users/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Update the users list after successful deletion
            setItems(users.filter(user=> user.id !== id));
            console.log("User deleted successfully");
            alert('User deleted successfully');
        } else {
           console.error('Failed to delete item');
           alert('Fail to deleted user');
        }
      }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
      
   };

      return(
        <>
        <div>
          <Header />
          <Navbar />
          <div className='container'>
          
            {/* Other components and content */}
           
            <h2>Stand up for the right even though you stand alone</h2>
           
         
      <h1>All Users</h1>
     <table align='center' cellPadding='5' style={{padding:'20px', border:'solid 1px'}}>
        {users.map(item => (
        <tr>
          <td><input type="checkbox" /></td>
          <td ><strong>{item.id}</strong> </td>
          <td align="left"><strong>{item.name}</strong> </td>
          <td>{item.username} </td>
          
          <td><strong>{item.status}</strong> </td>
          <td><button onClick={() => handleDelete(item.id)}  className='bt'>Delete</button></td>
          <td><button  className='bt2'><Link to ={`/up_user/${item.id}`}>Update</Link></button></td>  
              
        </tr>   
        ))}
         </table>
    </div>
          <Footer />
        </div>
        </>
       );
    }

export default About;
