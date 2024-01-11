import React from "react";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 p-4">
      <div className="container mx-auto flex justify-between gap-7 lg:gap-0 items-center">
        <div className="text-2xl font-bold text-green-800">RsCol</div>
        <div className="flex lg:space-x-14 space-x-4 items-center">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className="text-black cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="feature"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black cursor-pointer"
          >
            Feature
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black cursor-pointer"
          >
            Contact
          </ScrollLink>
          <Button text="Login" variant="primary" to="/SignInForm" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
