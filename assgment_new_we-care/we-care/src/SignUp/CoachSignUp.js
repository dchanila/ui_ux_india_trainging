import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserSignup() {
  const navigateToPost = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [userForm, setUserForm] = useState({
    name: "",
    dob: "",
    mobile: "",
    password: "",
    gender: "",
    Speciality: "",
  });

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/api/items", data)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          dob: "",
          mobile: "",
          password: "",
          gender: "",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigateToPost("/welcome-coach");
  };

  return (
    <div className="w-full bg-light">
      <nav className="bg-body-tertiary w-full">
        <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
          <div className="logo text-white font-semibold text-xl">WeCare</div>
          <div className="contact text-white">Call Us : 080 2233447</div>
        </div>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-5 text-center bg-gray-700 mt-5 w-5/6 mx-auto rounded-lg">
          <img
            src="image/coach-1.png"
            className="rounded-full mx-auto w-48"
            alt="Coach Image"
          />
          <h1 className="text-white text-4xl font-bold mb-1 w-full">
            User Profile
          </h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-100">
            <div className="rounded-lg py-5 px-4 shadow-md">
              {/* Name */}
              <label
                htmlFor="name"
                className="block text-white text-sm font-bold mb-1 text-left mt-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                {...register("name", { required: "Name cannot be empty" })}
                value={userForm.name}
                onChange={handleChange}
              />
              <div className="text-sm text-red-500">
                {errors.name && errors.name.message}
              </div>

              {/* Date of Birth */}
              <label
                htmlFor="dob"
                className="block text-white text-sm font-bold mb-1 text-left mt-1"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("dob", {
                  required: "Date of Birth cannot be empty",
                })}
                value={userForm.dob}
                onChange={handleChange}
              />
              <div className="text-sm text-red-500">
                {errors.dob && errors.dob.message}
              </div>

              {/* Mobile Number */}
              <label
                htmlFor="mobile"
                className="block text-white text-sm font-bold mb-1 text-left mt-1"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your mobile number"
                {...register("mobile", {
                  required: "Mobile number cannot be empty",
                })}
                value={userForm.mobile}
                onChange={handleChange}
              />
              <div className="text-sm text-red-500">
                {errors.mobile && errors.mobile.message}
              </div>
            </div>
            <div className="rounded-lg py-8 px-4 shadow-md">
              {/* Password */}
              <label
                htmlFor="password"
                className="block text-white text-sm font-bold mb-1 text-left mt-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password cannot be empty",
                })}
                value={userForm.password}
                onChange={handleChange}
              />
              <div className="text-sm text-red-500">
                {errors.password && errors.password.message}
              </div>

              {/* Gender */}
              <label
                htmlFor="password"
                className="block text-white text-sm font-bold mb-1 text-left mt-1"
              >
                Gender
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                    {...register("gender", { required: "Gender is required" })}
                    checked={userForm.gender === "male"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-white">Male</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                    {...register("gender", { required: "Gender is required" })}
                    checked={userForm.gender === "female"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-white">Female</span>
                </label>
              </div>
              <div className="text-sm text-red-500">
                {errors.gender && errors.gender.message}
              </div>

              {/* Email */}
              <label
                htmlFor="Speciality"
                className="block text-white text-sm font-bold mb-1 text-left mt-1"
              >
                Speciality
              </label>
              <input
                id="Speciality"
                name="Speciality"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Speciality"
                {...register("Speciality", {
                  required: "Speciality cannot be empty",
                })}
                value={userForm.email}
                onChange={handleChange}
              />
              <div className="text-sm text-red-500">
                {errors.Speciality && errors.Speciality.message}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-green-500 py-2 px-4 w-full max-w-sm rounded-lg mt-2"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      {userForm.gender}
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

export default UserSignup;
