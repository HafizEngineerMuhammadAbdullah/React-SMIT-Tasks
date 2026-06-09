import React from "react";
import HandleForm from "./component/HandleForm";
// import nature1 from './assets/nature1.jpg'

const App = () => {
  return (
    <div className="h-screen w-full bg-[url('./assets/nature1.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <HandleForm />
    </div>
  );
};

export default App;
