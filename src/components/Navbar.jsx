import React from "react";
import {FaBell,FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
    const {isAuthenticated} = useAuth()

  
  return (
    <nav className="w-full flex justify-between px-4  md:px-24 sticky top-0 z-40 py-5 items-center bg-Primary-LightBlue border-b border-Outline-gray">
      <Link to={'/'}><h3 className="text-xl md:text-3xl font-bold text-Primary-Blue font-Oswald ">BRAW!</h3></Link>

        
      
            <Link className={`${window.location.pathname === '/profile'?"hidden":""}`} to={isAuthenticated?"/profile":"/login"}>
            <div className="w-9 md:w-12 hover:bg-Primary-Purple duration-300 ease-in-out flex justify-center items-center aspect-square rounded-lg bg-Primary-Blue">
              <FaUser className="text-Primary-LightBlue" />
            </div>
          </Link>
       
   
    </nav>
  );
};

export default Navbar;
