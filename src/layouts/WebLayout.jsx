import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const WebLayout = ({ children }) => {
  return (
    <div>
      <div className="top-0 sticky z-30">
      <Navbar />
      </div>
      <div className="bg-slate-50">{children}</div>
      <Footer />
    </div>
  );
};

export default WebLayout;
