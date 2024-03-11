import React from "react";
import {FaBell,FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
    const isAuthenticate = useAuth()
  return (
    <nav className="w-full flex justify-between px-7 py-5 items-center bg-Primary-LightBlue">
      <Link to={'/'}><h3 className="text-xl font-bold text-Primary-Blue font-Oswald ">BRAW!</h3></Link>

      <div className="flex gap-3">
        <div className="w-9 hover:bg-Primary-Purple duration-300 ease-in-out flex justify-center items-center aspect-square rounded-lg bg-Primary-Blue">
          <FaBell className="text-Primary-LightBlue" />
        </div>
        <Link to={isAuthenticate?"/profil":"/login"}>
        <div className="w-9 hover:bg-Primary-Purple duration-300 ease-in-out flex justify-center items-center aspect-square rounded-lg bg-Primary-Blue">
          <FaUser className="text-Primary-LightBlue" />
        </div>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
