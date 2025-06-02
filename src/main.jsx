import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App'
import About from './components/About'
import RegForm from './components/RegForm'
import Profile from './pages/profile'
import Contactus from './pages/contactus'
import UserUpdate from './components/UserUpdate'
import SearchUser from './components/SearchUser'
import UpdateProfile from './components/ProfileUpdate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/front-end" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/register" element={<RegForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/up_user/:userid" element={<UserUpdate />} />
            <Route path="/search" element={<SearchUser />} />
            <Route path="/profileup" element={<UpdateProfile />} />
          </Routes>
        </BrowserRouter>
  </StrictMode>,
)
