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
    <div className="flex justify-between py-8 items-center">
      <NavLink to="/" className="w-1/5 font-bold text-2xl">
        Playable
      </NavLink>
      <nav className="flex justify-between w-1/5 items-center">
        {user ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : "p-2 font-bold cursor-pointer hover:text-slate-800"
              }
              to="/"
            >
              To Do
            </NavLink>
            <button
              onClick={handleLogout}
              className="p-2 font-bold cursor-pointer hover:text-slate-800"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : "p-2 font-bold cursor-pointer hover:text-slate-800"
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : "p-2 font-bold cursor-pointer hover:text-slate-800"
              }
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
