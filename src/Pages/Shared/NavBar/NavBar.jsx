import React from "react";
import ActiveLink from "./ActiveLink";
import "./NavBar.css";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <ActiveLink to='/'>
            Home
        </ActiveLink>
        <ActiveLink to='/contact'>
            Contact Us
        </ActiveLink>
        <ActiveLink to='/dashboard'>
            Dashboard
        </ActiveLink>
        <ActiveLink to='/menu'>
            Our Menu
        </ActiveLink>
        <ActiveLink to='/menu'>
            Our shop
        </ActiveLink>
        <ActiveLink to='/menu'>
            sign out
        </ActiveLink>

      </li>
      
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="px-10">
                <h1 className="nav-logo font-extrabold">BISTRO BOSS</h1>
                <h3 className="nav-logo-text">Restaurant</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        
      </div>
    </>
  );
};

export default NavBar;
