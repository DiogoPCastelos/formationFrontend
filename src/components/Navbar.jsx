import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-peachz text-white shadow-md">
      //TODO: ADD LOGO, HOME AND UPDATE BUTTONS
    </nav>
  );
};

export default Navbar;
