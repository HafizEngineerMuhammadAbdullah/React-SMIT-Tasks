import React from "react";
import HandleForm from "./components/HandleForm";
import Images from "./components/Images";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-3 items-center p-4 pt-10 overflow-y-auto">
      <div>
        <Images />
        <p className="text text-[#0a0a0a] text-[16px] font-normal text-center">
          Student Portal
        </p>
      </div>
      <HandleForm />
    </div>
  );
};

export default App;
