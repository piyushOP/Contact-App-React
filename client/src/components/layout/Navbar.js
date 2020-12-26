import React, { Fragment , useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

function Navbar({ title, icon }) {

   const authContext = useContext(AuthContext);
   const contactContext = useContext(ContactContext);

   const { isAuthenticated, logout, user } = authContext;
   const { clearContacts } = contactContext;

   function onLogout(){
      logout();
      clearContacts();
   }

   const authLinks = (
      <Fragment>
         <li>Hello,&nbsp; {user && user.name}</li>&nbsp;&nbsp;
         <li>
            <a onClick={onLogout} href="#">
               <i className="fas fa-sign-out-alt"> <span className="hide-sm">Logout</span></i> 
            </a>
         </li>
      </Fragment>

   );

   const guestLinks = (
      <Fragment>
         <li>
            <Link to="/register">Register</Link> 
         </li>
         <li>
            <Link to="/login">Login</Link> 
         </li>
      </Fragment>

   );

   return (
         <div className="navbar bg-primary">
            <h1>
               <i className={icon} /> {title}
            </h1>
            <ul>
               {isAuthenticated ? authLinks : guestLinks}
            </ul>
         </div>
   );
}

export default Navbar;
