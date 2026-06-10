import React from "react";

const HandleForm = () => {
  return (
    <form action="" className="w-[36vw] h-[65vh] flex flex-col gap-5">
      <div className="h-10 w-full p-1 flex items-center rounded-lg bg-[#f5f5f5]">
        <button className="bg-[#ffffff] text-[#0a0a0a] btn w-1/2 rounded">
          Login
        </button>
        <button className="text-[#737373] btn w-1/2">Create Password</button>
      </div>

      <div className="w-full h-[90%] border-[#b1a9a9] border-1 rounded-2xl">
        <div className="p-6">
          <p className="text text-[#0a0a0a] font-semibold leading-none tracking-tight">
            Login
          </p>
          <p className="text text-[#737373] font-[14px] mt-1.5">
            Kindly provide the CNIC number and password used during SMIT course
            registration.
          </p>
        </div>
      </div>
    </form>
  );
};

export default HandleForm;
