import React, { useState } from "react";
import HandleForm from "./components/HandleForm";
import Images from "./components/Images";
import Sidebar from "./components/Sidebar";

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div className={`h-full w-full flex  ${theme == 'light' ? 'bg-[#ffffff]' : 'bg-[#010101]'}`}>
      {/* SideBar */}
        <Sidebar />
      {/* Main Layout */}
      <main className="h-full w-full flex flex-col items-center p-4 pt-10 overflow-y-auto">
        <div>
          {/* SMIT Image Component */}
          <Images />
          <p className="text text-[#0a0a0a] text-[16px] font-normal text-center">
            Student Portal
          </p>
        </div>
        <HandleForm />
      </main >
    </div>
  );
};

export default App;
