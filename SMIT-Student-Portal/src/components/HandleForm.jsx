import React from "react";
import { Eye } from "lucide-react";

const HandleForm = () => {
  return (
    <form action="" className="w-[36vw] h-[65vh] flex flex-col gap-5">
      <div className="h-10 w-full p-1 flex items-center rounded-lg bg-[#f5f5f5]">
        <button className="bg-[#ffffff] text-[#0a0a0a] btn w-1/2 rounded">
          Login
        </button>
        <button className="text-[#737373] btn w-1/2">Create Password</button>
      </div>

      <div className="w-full h-[85%] flex flex-col border-[#b1a9a9] border-1 rounded-2xl">
        <div className="p-6">
          <p className="text text-[#0a0a0a] font-semibold leading-none tracking-tight">
            Login
          </p>
          <p className="text text-[#737373] font-[14px] mt-1.5">
            Kindly provide the CNIC number and password used during SMIT course
            registration.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="flex flex-col justify-center space-y-1">
            <label htmlFor="cnic" className="text-sm font-medium">
              CNIC *
            </label>
            <input
              className="bg-[#e8f0fe] h-9 w-full rounded-md px-3 py-1 mt-1 border border-[#458d92]"
              type="text"
              name="user-cnic"
              id="cnic"
            />
          </div>
          <div className="flex flex-col justify-center space-y-1 mt-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password *
            </label>
            <div className="relative">
              <input
                className="bg-[#e8f0fe] h-9 w-full rounded-md px-3 py-1 mt-1 border border-[#458d92]"
                type="password"
                name="user-password"
                id="password"
              />
              <button className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700">< Eye /></button>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex items-center p-6 pt-0">
          <button className="w-full rounded-md text-sm font-medium text text-[#fafafa] bg-[#2b4f8c] py-2 px-4 cursor-pointer">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};

export default HandleForm;
