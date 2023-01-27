import React from "react";
import { Link } from "react-router-dom";

function Mobilemenu() {
  return (
    <>
      <div className="flex flex-col bg-gray-100 font-black text-xs rounded-md">
        <Link to="/LoginPage">Login</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Forgot">Forgot</Link>
      </div>
    </>
  );
}
export default Mobilemenu;
