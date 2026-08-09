import React from "react";

const User = ({ element }) => {
  return (
    <div className="h-9 text-base text-black font-semibold">
      <h1>Full Name : {element.fullName}</h1>
      <h1>Email : {element.email}</h1>
      <h1>Password : {element.password}</h1>
      <h1>Confirm Password : {element.confirmPassword}</h1>
    </div>
  );
};

export default User;
