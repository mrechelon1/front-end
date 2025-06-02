import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import headerImage from '../assets/sfsf.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API_URL from '../api/api_route';
import axios from 'axios'; 

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(API_URL.CONTACTUS, formData);
      if (response.status === 200 || response.status === 201) {
        toast.success("Thank you! Your message has been sent successfully", {
                  position: "top-right",
                  closeButton: false,   
                  hideProgressBar: false, 
                  autoClose: 3000,       
                  pauseOnHover: true,
                  draggable: true,
                  theme: "colored",  
                });
        
                
        setTimeout(() => {
            window.scrollTo(0, 0); 
          navigate('/');
        }, 3000);
      } else {
        console.error('Sent failed:', response.data);
        setError('Sent failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during Sent Message:', error);
      setError('Error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <NavBar />

      {/* Header section with background image *********************************************/}
      <div style={{ ...styles.headerSection, backgroundImage: `url(${headerImage})` }}>
        <div style={styles.headerOverlay}>
          <h1 style={styles.headerTitle}>Contact Us</h1>
          <p style={styles.headerSubtitle}>We are here to help you. Reach out to us anytime.</p>
        </div>
      </div>

      {/* Contact card **************************************************/}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Get in Touch</h2>

          <div style={styles.infoSection}>
            <p><strong>University Name:</strong> Redeemers University</p>
            <p><strong>Address:</strong> Km 46, Lagos – Ibadan Expressway, Redemption City, Ogun State, Nigeria</p>
            <p><strong>Phone:</strong> +234 803 123 4567</p>
            <p><strong>Email:</strong> info@run.edu.ng</p>
          </div>

          <div style={styles.formSection}>
            <h3 style={styles.formTitle}>Send Us a Message</h3>
            {error && <div style={styles.errorMessage}>{error}</div>}
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={styles.input}
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={styles.input}
                required
              />

              <input
                type="number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Your Phone Number"
                style={styles.input}
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                style={styles.textarea}
              ></textarea>

              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer /> 
    </div>
  );
};

const styles = {
  headerSection: {
    width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '0 20px',
  },
  headerTitle: {
    fontSize: '42px',
    fontWeight: '700',
    marginBottom: '10px',
  },
  headerSubtitle: {
    fontSize: '20px',
    maxWidth: '700px',
    opacity: 0.9,
  },
  container: {
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    minHeight: '60vh',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '50px 40px',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    maxWidth: '650px',
    width: '100%',
    backdropFilter: 'blur(8px)',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#333',
  },
  infoSection: {
    marginBottom: '30px',
    lineHeight: '1.8',
    fontSize: '16px',
    color: '#555',
  },
  formSection: {
    marginTop: '30px',
    padding: '20px',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#eee',
    padding: '0px',
    borderRadius: '8px',
    
  },
  input: {
    marginBottom: '15px',
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border 0.3s',
  },
  textarea: {
    marginBottom: '15px',
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    minHeight: '120px',
    transition: 'border 0.3s',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#3e0485',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#5f2a96',
  },
  errorMessage: {
    backgroundColor: 'red',
    color: '#fff',
    padding: '10px',
    marginBottom: '40px',
    borderRadius: '1px',
    fontSize: '16px',

  },
};

export default ContactUsPage;
