import React, { useState } from "react";

const HandleForm = () => {

  const [name, setname] = useState(second)
  return (
    <form
      className="h-full w- full flex flex-col justify-evenly items-center bg-amber-300"
      action=""
    >
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="username">UserName : </label>
        <input type="text" name="username" id="username" size={40} />
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="fathername">FatherName : </label>
        <input type="text" name="fathername" id="fathername" size={40} />
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="emailid">Email id : </label>
        <input type="email" name="useremail" id="emailid" size={45} />
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="password">Password : </label>
        <input type="password" name="userpassword" id="password" size={42}/>
      </div>
      <div className="w-full flex justify-start items-center gap-x-10">
        {/* <p>Gender : </p> */}
        <label htmlFor="male">Gender : </label>
        <div>
          <input type="radio" name="Male" id="male" />
          <label htmlFor="male" className="mx-3">Male</label>
        </div>
        <div>
          <input type="radio" name="Female" id="female" />
          <label htmlFor="female" className="mx-3">Female</label>
        </div>
      </div>
      <div className="w-full flex justify-start items-center gap-x-4">
        <label htmlFor="">Department : </label>
        <div>
          <input type="checkbox" name="dept" id="CSE" value="CSE" />
          <label htmlFor="CSE" className="mx-3">CSE</label>
        </div>
        <div>
          <input type="checkbox" name="dept" id="IT" value="IT" />
          <label htmlFor="IT" className="mx-3">IT</label>
        </div>
        <div>
          <input type="checkbox" name="dept" id="ECE" value="ECE" />
          <label htmlFor="ECE" className="mx-3">ECE</label>
        </div>
        <div>
          <input type="checkbox" name="dept" id="Civil" value="Civil" />
          <label htmlFor="Civil" className="mx-3">Civil</label>
        </div>
        <div>
          <input type="checkbox" name="dept" id="Mech" value="Mech" />
          <label htmlFor="Mech" className="mx-3">Mech</label>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <p>Courses : </p>
        <select name="courses" id="">
          <option value="">
            ------------------ Select Current Course's -----------------
          </option>
          <option value="Web Development & Designing">
            Web Development & Designing
          </option>
          <option value="Agentic AI">Agentic AI</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="AI & Data Science">AI & Data Science</option>
        </select>
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="city">City : </label>
        <input type="text" name="user-city" id="city" size={45}/>
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="address">Address : </label>
        <textarea name="user-address" id="address" rows={3} cols={45}></textarea>
      </div>
      <div className="w-full flex justify-center items-center">
        <input type="submit" value="Register" className="border-2 py-2 px-5 rounded-xl cursor-pointer scale-x-95 bg-blue-900"  />
      </div>
    </form>
  );
};

export default HandleForm;
