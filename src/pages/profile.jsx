import React, { useEffect, useState } from 'react';
import axios from 'axios';
import profile_img from '../assets/profile_avatar.png'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import API_URL from '../api/api_route';

function ProfilePage(){
  
    const [profileData, setProfileData] = useState(null);
    const token = localStorage.getItem('access_token'); // Retrieve token from local storage

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [token]);

  return (
    <div>
        <Header />
        <NavBar />
  
        <div style={styles.container}>
            <div style={styles.profileCard}>
          {profileData ? (
            <div>
                <img src={profile_img} alt="Profile" style={styles.profileImage} />
                <h2 style={styles.name}>Welcome: {profileData.name}</h2>
                <p style={styles.studentId}>User ID: <strong>{profileData.id} </strong></p>
          
          <p>Username: <strong>{profileData.username}</strong></p>
          <p>Status: <strong>{profileData.status}</strong></p>
          </div>
         ) : (
            <p>Loading profile data...</p>
          )}
            </div>
        </div>
        <Footer />
    </div>
  );
};

// Simple inline styles  .......................................
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "40vh",
  },
  profileCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },
    name: {
        margin: "0px 0",
        fontSize: "24px",
        fontWeight: "bold",
        marginTop:-20
    },
  studentId: {
    margin: "0px 0",
    color: "#777",
  },
  infoSection: {
    marginTop: "20px",
    textAlign: "left",
  },
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    backgroundColor: "#f5f5f5",
  },
  loader: {
    width: "50px",
    height: "50px",
    border: "6px solid #f3f3f3",
    borderTop: "6px solidrgb(176, 9, 182)", 
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#555",
  },

};

export default ProfilePage;
