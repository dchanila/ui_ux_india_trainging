import React from "react";

function LoginAsUser() {
  return (
    <div className="w-full bg-light">
      <nav className="bg-body-tertiary w-full">
        <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
          <div className="logo text-white font-semibold text-xl">WeCare</div>
          <div className="contact text-white">Call Us : 080 2233447</div>
        </div>
      </nav>

      <div className="py-10 text-center bg-gray-700 mt-20  w-1/2 mx-auto mt-20 rounded-lg">
        <img
          src="image/man_key.png"
          className="rounded-full mx-auto w-10"
          alt="User Image"
        />
        <h1 className="text-white text-4xl font-bold mb-8 w-full">
          Login As Life User
        </h1>
        <div className="container mx-auto  h-100">
          <div className="rounded-lg py-8 px-4 shadow-md">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
              id="password"
              type="password"
              placeholder="Enter your User Id"
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="speciality"
              type="text"
              placeholder="Enter your Password"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-green-500 py-2 px-4 w-full max-w-sm rounded-lg">
            Login
          </button>
        </div>
      </div>

      <nav className="bg-body-tertiary fixed-bottom w-full">
        <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
          <a href="#" className="text-white">
            Fixed bottom
          </a>
        </div>
      </nav>
    </div>
  );
}

export default LoginAsUser;
