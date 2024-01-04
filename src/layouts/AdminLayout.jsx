import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Components/Dashboard";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current !== event.target
      ) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative flex h-screen bg-gray-100">
      <aside
        ref={sidebarRef}
        className={`bg-gray-800 text-white w-64 sm:w-16 md:w-24 lg:w-64 xl:w-64 transition-all duration-300 ease-in-out fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:relative sm:translate-x-0`}
        style={{ zIndex: 30 }}
      >
        <Sidebar />
      </aside>

      <main className="flex-1 relative transition-all duration-300 ease-in-out">
        <button
          ref={buttonRef}
          className="block sm:hidden text-black p-4 bg-white"
          onClick={toggleSidebar}
          style={{ zIndex: 40 }}
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>

        <Dashboard />
      </main>
    </div>
  );
};

export default Layout;
