import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Header from './components/Header';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <Navbar />
      <div className='container'>
         
          

          {/* Other components and content */}
          <h1>Vite + React + FastAPI</h1>
        <div className='login'>
          <ul>
            <li><img src="/img/reed.png" className="App-logo" alt="logo" width={600} /></li>
            <li><Login /></li>
          </ul>
        </div>       
      </div>      
      <Footer />
    </div>
    
    </>
  )
}

export default App
