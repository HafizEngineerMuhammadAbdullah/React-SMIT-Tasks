import React, { useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import styles from "./StyleForm.module.css";

const HandleForm = () => {

  const [isShowPassword, setShowPassword] = useState(false);

  const resistReload = (e) => {
    e.preventDefault();
  };
  
  return (
    <div>
      <form
        onSubmit={resistReload}
        className={`${styles.form} w-[30vw] h-[60vh] flex flex-col gap-5`}
      >
        <div className="h-10 w-full p-1 flex items-center rounded-lg bg-[#f5f5f5]">
          <button
            className={`${styles.btn} bg-[#ffffff] text-[#0a0a0a] btn w-1/2 rounded`}
          >
            Login
          </button>
          <button className={`${styles.btn} text-[#737373] btn w-1/2`}>
            Create Password
          </button>
        </div>

        <div className="w-full h-[85%] flex flex-col border-[#b1a9a9] border rounded-2xl">
          <div className="p-6">
            <p className="text-[#0a0a0a] font-semibold leading-none tracking-tight">
              Login
            </p>
            <p className="text-[#737373] font-normal text-[15px] mt-2">
              Kindly provide the CNIC number and password used during SMIT
              course registration.
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col justify-center space-y-1">
              <label htmlFor="cnic" className="text-sm font-normal">
                CNIC *
              </label>
              <input
                className="bg-[#e8f0fe] h-9 w-full rounded-md px-3 py-1 mt-1 border border-[#8c969773] focus:outline-1"
                type="text"
                name="user-cnic"
                id="cnic"
              />
            </div>
            <div className="flex flex-col justify-center space-y-1 mt-2">
              <label htmlFor="password" className="text-sm font-normal">
                Password *
              </label>
              <div className="relative">
                <input
                  className="bg-[#e8f0fe] h-9 w-full rounded-md px-3 py-1 mt-1 border border-[#8c969773] focus:outline-1"
                  type="password"
                  name="user-password"
                  id="password"
                />
                <button
                  onClick={() => setShowPassword(!isShowPassword)}
                  className="h-1 absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {isShowPassword ? <EyeOff size={18}/> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex items-center p-6 pt-0">
            <button className="w-full rounded-md text-sm font-medium text text-[#fafafa] bg-[#2b4f8cde] hover:bg-[#2b4f8cff] py-2 px-4 cursor-pointer">
              LOGIN
            </button>
          </div>
        </div>
      </form>
      <button className="mt-4 h-9 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 text-black border border-[#c0b9b9be] bg-white-shadow-sm inline-flex justify-center items-center rounded-md text-[15px] font-medium">
        Login as teacher
      </button>
    </div>
  );
};

export default HandleForm;
