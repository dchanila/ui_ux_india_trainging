import React from "react";

function CoachSignUp() {
  return (
    <div className="w-full bg-light">
      <nav className="bg-body-tertiary w-full">
        <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
          <div className="logo text-white font-semibold text-xl">WeCare</div>
          <div className="contact text-white">Call Us : 080 2233447</div>
        </div>
      </nav>

      <div className="py-10 text-center bg-gray-700 mt-20  w-5/6 mx-auto mt-20 rounded-lg">
        <img
          src="image/coach-1.png"
          className="rounded-full mx-auto w-48"
          alt="Coach Image"
        />
        <h1 className="text-white text-4xl font-bold mb-8 w-full">
          Life Coach Profile
        </h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-100">
          <div className="rounded-lg py-8 px-4 shadow-md">
            <label
              className="block text-white text-sm font-bold mb-2 text-left mt-3"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
            <label
              className="block text-white text-sm font-bold mb-2 text-left mt-3"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="text"
              placeholder="Enter your date of birth"
            />
            <label
              className="block text-white text-sm font-bold mb-2 text-left mt-3"
              htmlFor="mobile"
            >
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="text"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="rounded-lg py-8 px-4 shadow-md">
            <label
              className="block text-white text-sm font-bold mb-2 text-left mt-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex items-center text-white mt-4">
              <input
                type="radio"
                id="male"
                name="gender"
                className="form-radio h-5 w-5 text-blue-600"
              />
              <label htmlFor="male" className="ml-2">
                Male
              </label>
            </div>
            <div className="flex items-center text-white">
              <input
                type="radio"
                id="female"
                name="gender"
                className="form-radio h-5 w-5 text-pink-600"
              />
              <label htmlFor="female" className="ml-2">
                Female
              </label>
            </div>
            <label
              className="block text-white text-sm font-bold mb-2 text-left mt-4"
              htmlFor="speciality"
            >
              Speciality
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="speciality"
              type="text"
              placeholder="Enter your speciality"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-green-500 py-2 px-4 w-full max-w-sm rounded-lg">
            Register
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

export default CoachSignUp;
