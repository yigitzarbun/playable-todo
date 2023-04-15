import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { LOGOUT } from "../redux-stuff/actions";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/login");
  };
  return (
    <div className="flex justify-between py-8">
      <NavLink to="/" className="w-1/5">
        Playable
      </NavLink>
      <input type="text" className="searchBar w-2/5" />
      <nav className="flex justify-between w-1/5">
        <NavLink to="/">To Do</NavLink>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
