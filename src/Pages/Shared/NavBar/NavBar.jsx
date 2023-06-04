import { handler } from "daisyui";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "./ActiveLink";
import {  FaShoppingCart } from 'react-icons/fa';
import "./NavBar.css";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart()

  const handleSignOut = () =>{
    logOut()
    .then(() =>{
      toast.success('Sign Out Successful')
    })
    .catch(error =>{
      toast.error('Something is wrong. Try Again !!')
    })
}

  const navOptions = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact Us</ActiveLink>
      </li>

      <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/menu">Our Menu</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/order/salads">Order Food</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard/mycart">
          <FaShoppingCart className="text-2xl"/>
          <div className="badge badge-warning font-bold">+{cart?.length}</div>
        </ActiveLink>
      </li>
      <li className="flex items-center">
        {user ? <button onClick={handleSignOut} className="btn btn-sm bg-yellow-500 border-none">Logout</button> : <ActiveLink to="/login">Login</ActiveLink>}
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
          <div className="px-5">
            <h1 className="nav-logo md:text-3xl font-extrabold">BISTRO BOSS</h1>
            <h3 className="nav-logo-text md:text-2xl">Restaurant</h3>
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
