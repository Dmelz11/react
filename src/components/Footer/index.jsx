import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'


const Footer = () => {

  const location = useLocation();
  const navigate = useNavigate();
  return (
   
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="footer-container text-center">
        
      <a href="https://github.com/Dmelz11"className="btn btn-dark mb-1">
            Github Profile
          </a>
          <br></br>
          <br></br>
          <a href="https://www.linkedin.com/in/david-melendez-a03759293/"className="btn btn-dark mb-3">
            LinkedIn Profile
          </a>
          <br></br>
           <br></br>
         {location.pathname !== '/' && (
          
          <button
            className="btn btn-dark mb-5"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
          
        )}
        <br></br>
        <h4>Thank you for Visiting!</h4>
      </div>
    </footer>
  );
};

export default Footer;