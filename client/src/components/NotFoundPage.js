import React from 'react'; 
import { Link } from 'react-router-dom'; 

// Link prevent server refresh like we'd get with <a> tag;  Link stays on Client side   
const NotFoundPage = () => (
   <div className="container body-container">
      <Link to="/">404 Error - Page Not Found</Link>  
   </div>
);

export default NotFoundPage; 