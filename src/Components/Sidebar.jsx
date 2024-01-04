import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaCalendarAlt,
  FaKey,
  FaInvision,
  FaHome,
} from "react-icons/fa";

const SidebarItem = ({ icon, text }) => {
  return (
    <li className="text-gray-700 p-3 flex gap-3 text-lg  group transition-all hover:bg-slate-400 cursor-pointer">
      {icon &&
        React.cloneElement(icon, {
          className: "text-2xl",
        })}
      {text}
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="h-screen bg-slate-300 text-black overflow-y-auto transition-all p-6">
      <h2 className="text-2xl flex items-center gap-3 p-5 mb-8">
        <FaInvision className="text-3xl" />
        <span className="">Colman</span>
      </h2>
        <ul className="flex flex-col gap-4">
          <SidebarItem icon={<FaHome />} text="Dashboard" />
          <SidebarItem icon={<FaUsers />} text="All Users" />
          <SidebarItem icon={<FaLightbulb />} text="All Fixtures" />
          <SidebarItem icon={<FaCalendarAlt />} text="Scheduler" />
          <SidebarItem icon={<FaKey />} text="Command Logs" />
        </ul>
    </div>
  );
};

export default Sidebar;
