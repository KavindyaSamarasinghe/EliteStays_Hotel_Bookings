import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
      {sidebarLinks.map((link, index) => (
  <NavLink
    to={link.path}
    key={index}
    className={({ isActive }) =>
      `flex items-center py-3 px-4 md:px-8 gap-3 ${
        isActive
          ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600"
          : "hover:bg-gray-100/90 border-white text-gray-700"
      }`
    }
  >
    <img src={link.icon} alt={link.name} className="w-5 h-5 md:w-6 md:h-6" />
    <span className="hidden md:inline">{link.name}</span>
  </NavLink>
))}
    </div>
  );
};

export default Sidebar;
