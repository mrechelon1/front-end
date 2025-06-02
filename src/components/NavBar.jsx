import { Link } from 'react-router-dom';
import './FrontStyle.css';
import { useNavigate} from 'react-router-dom';

function NavBar() {
  const token = localStorage.getItem('access_token'); // Check if user is logged in here
  const navigate = useNavigate();

    const handleLogout = async () => {
        try {
           
                localStorage.removeItem('access_token'); // Clear the token
                navigate('/'); // Redirect to login page
           
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/front-end">Home</Link>
        </li>
        <li>
          <Link to="/about">All Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {token ? (
          // If logged in display these links
          <>
            <li>
              <Link to="/profile">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
             <li>
              <Link to="/profileup">Update Profile</Link>
            </li>
             <li onClick={handleLogout}>
              <Link to="/front-end">Logout</Link>
            </li>
          </>
        ) : (
          // If not logged in display these links
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>           
             <li>
              <Link to="/search">Search User</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
