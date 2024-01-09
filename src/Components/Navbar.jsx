// Navbar.js
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-green-800">RsCol</div>
        <div className="flex space-x-14 items-center">
          <Link to="about" className="text-black">
            About
          </Link>
          <Link to="feature" className="text-black">
            Feature
          </Link>
          <Link to="contact" className="text-black">
            Contact
          </Link>
          <Button text="Login" variant="primary" to="/signin" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
