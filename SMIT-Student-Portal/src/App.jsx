import React from "react";
import HandleForm from "./components/HandleForm";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-3 items-center p-4 pt-10 overflow-y-auto">
      <div>
        <img
          src="/assets/smit-logo.png"
          className="w-24 sm:w-28 md:w-32 mx-auto"
          alt="SMIT Logo"
        />
        <p className="text text-[#0a0a0a] text-[16px] font-normal text-center">
          Student Portal
        </p>
      </div>
      <HandleForm />
    </div>
  );
};

export default App;
