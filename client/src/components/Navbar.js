import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
    <nav>
    <div className="nav-wrapper">
     <div className="nav-content">
      <Link to="/" className="brand-logo">Logo</Link>
      
      <ul id="nav-mobile" className="links">
        <li><Link to="/">Appstore</Link></li>
        <input type="text" />
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
      </div>
    </div>
  </nav>
    )
}
export default Navbar