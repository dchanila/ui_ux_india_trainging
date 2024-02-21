import React from "react";
function HomeComponent() {
  return (
    <div className="w-full bg-light">
      <nav className="bg-body-tertiary w-full ">
        <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
          <div className="logo text-white font-semibold text-xl">WeCare</div>
          <div className="contact text-white">Call Us : 080 2233447</div>
        </div>
      </nav>

      <div className="bg-light py-10 text-center  h-5/6 mt-20">
        <h1 className="text-4xl font-bold mb-8">
          We are at the heart of appropriate Care
        </h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8   h-100 ">
          <div className="bg-gray-700 rounded-lg py-8 px-4 shadow-md">
            <div className="mb-8">
              <img
                src="coach-1.png"
                className="rounded-full mx-auto w-48"
                alt="Coach Image"
              />
            </div>
            <div className="w-full flex  flex-col mt-5">
              <a
                href="login.html"
                className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md p-1"
              >
                Login as Coach
              </a>
              <a
                href="signup.html"
                className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md p-1"
              >
                Join as Coach
              </a>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg py-8 px-4 shadow-md">
            <div className="mb-8">
              <img
                src="man_key.png"
                className="rounded-full mx-auto w-32"
                alt="User Image"
              />
            </div>
            <div className="w-full flex  flex-col ">
              <a
                href="login.html"
                className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md p-1"
              >
                Login as User
              </a>
              <a
                href="signup.html"
                className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md p-1"
              >
                Join as User
              </a>
            </div>
          </div>
        </div>
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
export default HomeComponent;
