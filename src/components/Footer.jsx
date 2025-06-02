import { Link } from "react-router-dom";
import './FrontStyle.css';

function Footer(){
  return (
    <div>
      <footer className="footer">
        <div className="container ">
          <div className="row">
            <div className="footer-col">
              <h4>FOOTHOLD OF EXCELLENCE</h4>
              <p>
              Founded on a Christian mission mindset, Redeemer’s University is a 
              rapidly expanding, vision-driven institution dedicated to leading the way
               in innovative learning. Our vision is to develop a new generation of African leaders. 
               It is a compelling one. In order to produce whole men and women who will develop their 
               world, we are doing this on the basis of an integrated learning curriculum that 
               emphasizes human development.
              </p>
            </div>
            <div className="footer-col">
              <ul>
                <h4>Quick Links</h4>
                <li>
                  <Link href="#">Homes</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Packages</Link>
                </li>
                <li>
                  <Link href="#">People</Link>
                </li>
                <li>
                  <Link href="#">Business</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <h4>Services</h4>
                <li>
                  <Link href="#">Admission</Link>
                </li>
                <li>
                  <Link href="#">Faculties</Link>
                </li>
                <li>
                  <Link href="#">How to Apply</Link>
                </li>
                <li>
                  <Link href="#">Hostels</Link>
                </li>
                <li>
                  <Link href="#">Campus</Link>
                </li>
                <li>
                  <Link href="#">Portals</Link>
                </li>
                
              </ul>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
