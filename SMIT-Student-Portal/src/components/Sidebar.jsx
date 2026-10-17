import React, { useState } from 'react'
import Images from './Images'
import { SidebarIcon, SidebarOpenIcon, SlidersHorizontalIcon } from 'lucide-react';
import { VscLayoutSidebarRightOff } from "react-icons/vsc"

const Sidebar = () => {
  const [isHover, setIsHover] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  console.log("isSidebarOpen : ", isSidebarOpen);
  
  return (
    <aside className={`h-screen p-4 bg-gray-800 transition-all ${isSidebarOpen ? 'w-[250px]' : 'w-15'}`}>
      <div className="flex justify-between items-center space-y-4">
        {/* SMIT Logo */}
        <div className={`w-40 h-14 p-2 transition-all ${isSidebarOpen ? '': 'opacity-0 hidden pointer-events-none'}`}>
          <img src="/assets/sit-logo-on-dark.png" className='object-contain' alt="SMIT Logo" />
        </div>

        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`mb-3.5 p-1 hover:bg-gray-600 rounded-md ${isSidebarOpen ? 'cursor-pointer' : `cursor-e-resize`}`}>
          {/* SideBar Open Icon */}
          {/* Use a functional state update and keep the icon clickable when closed: */}
          {/* The first click closes the sidebar, but then the wrapper disables pointer events, so the icon can’t receive the second click. There’s also a handler bug: React passes the click event to onClick, not the previous state, so !prev evaluates to false. */}
          {
            !isSidebarOpen && isHover ?  <VscLayoutSidebarRightOff size={24} /> : <SidebarOpenIcon onClick={() => setIsSidebarOpen((prev) => !prev)} /> 
          }
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
