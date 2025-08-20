// src/components/Header.jsx

import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          <Link to={user ? "/home" : "/"}>eCommerce</Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            {user ? (
              // If user is logged in, show a Logout button
              <li>
                <button
                  onClick={onLogout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Logout
                </button>
              </li>
            ) : (
              // If user is logged out, show Login and Register links
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                    `bloc  py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                    `bloc  py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
