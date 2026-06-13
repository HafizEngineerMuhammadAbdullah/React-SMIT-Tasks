import React from "react";
import HandleForm from "./components/HandleForm";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-3 items-center p-4 pt-10 overflow-y-auto">
      <div>
        <img
          className="mx-auto"
          src="/assets/smit-logo.png"
          width="120"
          alt=""
        />
        <p className="text-[#0a0a0a] font-[16px] text-center">Student Portal</p>
      </div>
      <HandleForm />
    </div>
  );
};

export default App;
