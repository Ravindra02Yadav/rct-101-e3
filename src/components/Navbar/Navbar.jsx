import React from "react";
import {Link, useNavigate} from "react-router-dom"
// use react-router Link or NavLink


const Navbar = () => {
  const navigate =useNavigate();
  const handleLoginClick = ()=>{
    navigate("/Login")
  }
  return (
    <div data-cy="navbar">
      <Link to = "/Login" data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */ 
    
      }</span>
      <button onClick={handleLoginClick} data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
