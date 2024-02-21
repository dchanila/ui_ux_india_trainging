import React from "react";
import { Outlet, Link } from "react-router-dom";
function Welcomeuser() {
  return (
    <div className="w-full bg-light">
      <nav className="bg-body-tertiary w-full ">
        <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
          <div className="logo text-white font-semibold text-xl">WeCare</div>
          <div className="contact text-white">Call Us : 080 2233447</div>
        </div>
      </nav>

      <div className="bg-light py-10 text-center  h-5/6 mt-20">
        <img
          src="image/man_key.png"
          className="rounded-full mx-auto w-40"
          alt="User Image"
        />
        <h1 className="text-4xl font-bold mb-8">
          Account Created successfully
        </h1>
        <h3>Your User Id </h3>
        <Link
          to="/loginAsUser"
          className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md p-3"
        >
          <a>Login as User</a>
        </Link>
      </div>

      <nav className="bg-body-tertiary fixed-bottom w-full">
        <div className=" mx-auto flex justify-between py-4 bg-gray-700 w-full">
          <a href="#" className="text-white">
            Fixed bottom
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Welcomeuser;
