import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between py-8">
      <NavLink to="/" className="w-1/5">
        Playable
      </NavLink>
      <input type="text" className="searchBar w-2/5" />
      <nav className="flex justify-between w-1/5">
        <NavLink to="/">To Do</NavLink>
        <NavLink to="/login">Login</NavLink>
        <Link to="/login">Logout</Link>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
}

export default Header;
