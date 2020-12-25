import React from 'react';
import { Link } from "react-router-dom";

function Navbar({ title, icon }) {
   return (
         <div className="navbar bg-primary">
            <h1>
               <i className={icon} /> {title}
            </h1>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link> 
               </li>
               <li>
                  <Link to="/register">Register</Link> 
               </li>
               <li>
                  <Link to="/login">Login</Link> 
               </li>
            </ul>
         </div>
   );
}

export default Navbar;
