import React, { useState } from "react";

const HandleForm = () => {
  // Use State Hook to track variables & update if required
  const [userName, setUserName] = useState("");
  const [userFatherName, setUserFatherName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [gender, setGender] = useState("Other");
  const [dept, setDept] = useState([]);
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleDepartment = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setDept([...dept, value]);
    } else {
      setDept(dept.filter((item) => item !== value));
    }
  };

  // function to handle Submit & show Details of the user Info When Clicked on Submit or Register Button
  const handleSubmit = (e) => {
    // prevent the browser to reload the page
    e.preventDefault();

    console.log("-------User Details ----------");
    console.log(`User Name : ${userName}`);
    console.log(`Father Name : ${userFatherName}`);
    console.log(`User Email : ${userEmail}`);
    console.log(`User Password : ${userPassword}`);
    console.log(`User Gender : ${gender}`);
    console.log(`Department Name : ${dept}`);
    console.log(`Course Name : ${course}`);
    console.log(`City Name : ${city}`);
    console.log(`Address : ${address}`);

    const userData = {
      userName,
      userFatherName,
      userEmail,
      userPassword,
      gender,
      dept,
      course,
      city,
      address,
    };

    console.log(userData);
  };

  return (
    <form
      className="h-full flex flex-col justify-evenly items-center"
      onSubmit={handleSubmit}
      action=""
    >
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="username">UserName : </label>
        <input
          type="text"
          name="username"
          value={userName}
          id="username"
          size={40}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="fathername">FatherName : </label>
        <input
          type="text"
          name="fathername"
          value={userFatherName}
          id="fathername"
          size={40}
          onChange={(e) => setUserFatherName(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="useremailid">Email id : </label>
        <input
          type="email"
          name="email"
          value={userEmail}
          id="useremailid"
          size={45}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="userpassword">Password : </label>
        <input
          type="password"
          name="password"
          value={userPassword}
          id="userpassword"
          size={42}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-start items-center gap-x-10">
        <label htmlFor="Other">Gender : </label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            onClick={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male" className="mx-3">
            Male
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            onClick={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className="mx-3">
            Female
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Other"
            id="Other"
            onClick={(e) => setGender(e.target.value)}
          />
          <label htmlFor="Other" className="mx-3">
            Others
          </label>
        </div>
      </div>
      <div className="w-full flex justify-start items-center gap-x-4">
        <label htmlFor="CSE">Department : </label>
        <div>
          <input
            type="checkbox"
            name="dept"
            id="CSE"
            value="CSE"
            onChange={handleDepartment}
          />
          <label htmlFor="CSE" className="mx-3">
            CSE
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="dept"
            id="IT"
            value="IT"
            onChange={handleDepartment}
          />
          <label htmlFor="IT" className="mx-3">
            IT
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="dept"
            id="ECE"
            value="ECE"
            onChange={handleDepartment}
          />
          <label htmlFor="ECE" className="mx-3">
            ECE
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="dept"
            id="Civil"
            value="Civil"
            onChange={handleDepartment}
          />
          <label htmlFor="Civil" className="mx-3">
            Civil
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="dept"
            id="Mech"
            value="Mech"
            onChange={handleDepartment}
          />
          <label htmlFor="Mech" className="mx-3">
            Mech
          </label>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <label htmlFor="">Courses : </label>
        <select
          name="course"
          id=""
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
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
        <input
          type="text"
          name="cityname"
          value={city}
          id="city"
          size={45}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-start items-center gap-x-6">
        <label htmlFor="address">Address : </label>
        <textarea
          name="user-address"
          value={address}
          id="address"
          rows={3}
          cols={45}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
      <div className="w-full flex justify-center items-center">
        <input
          type="submit"
          value="Register"
          className="border-2 py-2 px-5 rounded-xl scale-95 cursor-pointer bg-blue-900"
        />
      </div>
    </form>
  );
};

export default HandleForm;
