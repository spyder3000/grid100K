import React from 'react'; 
import { Link } from 'react-router-dom'; 

// Link prevent server refresh like we'd get with <a> tag;  Link stays on Client side   
const NotFoundPage = () => (
   <div>
      404 -- <Link to="/">Go Home</Link>  
   </div>
);

export default NotFoundPage; 