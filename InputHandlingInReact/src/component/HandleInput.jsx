import React, { useState } from "react";

const HandleInput = () => {
  const [name, setName] = useState("");
  const [isBtnPress, setBtnPress] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const showVal = () => {
    setBtnPress(true);
    // setName('');
  };

  const reset = () => {
    setName("");
    setBtnPress(false);
  };

  return (
    <div className=" w-[80vw] aspect-square max-w-[560px] flex flex-col justify-around items-center border-sky-200 border-2 rounded-full">
      <h1 className="font-extrabold text-3xl underline">Input Handling!</h1>
      <p className="text-amber-500 bg-transparent text-4xl">
        {isBtnPress ? name : ""}
      </p>
      <input
        type="text"
        placeholder="Please , Enter Your Name"
        value={name}
        onChange={handleChange}
        className="text-blue-600 font-semibold text-lg tracking-wide bg-gray-300 border-2 border-green-500 rounded-2xl outline-none px-5 py-3"
      />

      <div className="flex mt-5 gap-x-5">
        <button
          onClick={showVal}
          className="border-2 border-blue-100 rounded-3xl outline-none px-5 py-3 cursor-pointer text-emerald-500"
        >
          Want to See Value!
        </button>
        <button
          onClick={reset}
          className="border-2 border-red-100 rounded-3xl outline-none px-5 py-3 cursor-pointer text-fuchsia-700"
        >
          Want to Reset!
        </button>
      </div>
    </div>
  );
};

export default HandleInput;
