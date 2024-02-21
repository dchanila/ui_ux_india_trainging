import React from "react";
import HomeComponent from "./HomeComponent/HomeComponent";

function App() {
  return <HomeComponent />;
}

export default App;

// import React from "react";

// function App() {
//   return (
//     <div className="w-full bg-light">
//       <nav className="bg-body-tertiary w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <div className="logo text-white font-semibold text-xl">WeCare</div>
//           <div className="contact text-white">Call Us : 080 2233447</div>
//         </div>
//       </nav>

//       <div className="py-10 text-center bg-gray-700 mt-20  w-5/6 mx-auto mt-20 rounded-lg">
//         <h1 className="text-white text-4xl font-bold mb-8 w-full">
//           Life Coach Profile
//         </h1>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-100">
//           <div className="rounded-lg py-8 px-4 shadow-md">
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               placeholder="Enter your name"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="dob"
//             >
//               Date of Birth
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="dob"
//               type="text"
//               placeholder="Enter your date of birth"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="mobile"
//             >
//               Mobile Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="mobile"
//               type="text"
//               placeholder="Enter your mobile number"
//             />
//           </div>
//           <div className="rounded-lg py-8 px-4 shadow-md">
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//             />
//             <div className="flex items-center text-white mt-4">
//               <input
//                 type="radio"
//                 id="male"
//                 name="gender"
//                 className="form-radio h-5 w-5 text-blue-600"
//               />
//               <label htmlFor="male" className="ml-2">
//                 Male
//               </label>
//             </div>
//             <div className="flex items-center text-white">
//               <input
//                 type="radio"
//                 id="female"
//                 name="gender"
//                 className="form-radio h-5 w-5 text-pink-600"
//               />
//               <label htmlFor="female" className="ml-2">
//                 Female
//               </label>
//             </div>
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-4"
//               htmlFor="speciality"
//             >
//               Speciality
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="speciality"
//               type="text"
//               placeholder="Enter your speciality"
//             />
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button className="text-white bg-green-500 py-2 px-4 w-full max-w-sm rounded-lg">
//             Register
//           </button>
//         </div>
//       </div>

//       <nav className="bg-body-tertiary fixed-bottom w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <a href="#" className="text-white">
//             Fixed bottom
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;

//coach life reg

// import React from "react";

// function App() {
//   return (
//     <div className="w-full bg-light">
//       <nav className="bg-body-tertiary w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <div className="logo text-white font-semibold text-xl">WeCare</div>
//           <div className="contact text-white">Call Us : 080 2233447</div>
//         </div>
//       </nav>

//       <div className="py-10 text-center bg-gray-700 mt-20  w-5/6 mx-auto mt-20 rounded-lg">
//         <h1 className="text-white text-4xl font-bold mb-8 w-full">
//           User Profile
//         </h1>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-100">
//           <div className="rounded-lg py-8 px-4 shadow-md">
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               placeholder="Enter your name"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="dob"
//             >
//               Date of Birth
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="dob"
//               type="text"
//               placeholder="Enter your date of birth"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="mobile"
//             >
//               Mobile Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="mobile"
//               type="text"
//               placeholder="Enter your mobile number"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="mobile"
//             >
//               Pin Code
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="mobile"
//               type="text"
//               placeholder="Enter your mobile number"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="mobile"
//             >
//               State
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="mobile"
//               type="text"
//               placeholder="Enter your mobile number"
//             />
//           </div>
//           <div className="rounded-lg py-8 px-4 shadow-md">
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//             />
//             <div className="flex items-center text-white mt-4">
//               <input
//                 type="radio"
//                 id="male"
//                 name="gender"
//                 className="form-radio h-5 w-5 text-blue-600"
//               />
//               <label htmlFor="male" className="ml-2">
//                 Male
//               </label>
//             </div>
//             <div className="flex items-center text-white">
//               <input
//                 type="radio"
//                 id="female"
//                 name="gender"
//                 className="form-radio h-5 w-5 text-pink-600"
//               />
//               <label htmlFor="female" className="ml-2">
//                 Female
//               </label>
//             </div>
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-4"
//               htmlFor="speciality"
//             >
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="speciality"
//               type="text"
//               placeholder="Enter your speciality"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="mobile"
//             >
//               City
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="mobile"
//               type="text"
//               placeholder="Enter your mobile number"
//             />
//             <label
//               className="block text-white text-sm font-bold mb-2 text-left mt-3"
//               htmlFor="mobile"
//             >
//               Country
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="mobile"
//               type="text"
//               placeholder="Enter your mobile number"
//             />
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button className="text-white bg-green-500 py-2 px-4 w-full max-w-sm rounded-lg">
//             Register
//           </button>
//         </div>
//       </div>

//       <nav className="bg-body-tertiary fixed-bottom w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <a href="#" className="text-white">
//             Fixed bottom
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   return (
//     <div className="w-full bg-light">
//       <nav className="bg-body-tertiary w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <div className="logo text-white font-semibold text-xl">WeCare</div>
//           <div className="contact text-white">Call Us : 080 2233447</div>
//         </div>
//       </nav>

//       <div className="py-10 text-center bg-gray-700 mt-20  w-1/2 mx-auto mt-20 rounded-lg">
//         <h1 className="text-white text-4xl font-bold mb-8 w-full">
//           Login As Life Coach
//         </h1>
//         <div className="container mx-auto  h-100">
//           <div className="rounded-lg py-8 px-4 shadow-md">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
//               id="password"
//               type="password"
//               placeholder="Enter your code Id"
//             />

//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="speciality"
//               type="text"
//               placeholder="Enter your Password"
//             />
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button className="text-white bg-green-500 py-2 px-4 w-full max-w-sm rounded-lg">
//             Login
//           </button>
//         </div>
//       </div>

//       <nav className="bg-body-tertiary fixed-bottom w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <a href="#" className="text-white">
//             Fixed bottom
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;

// coach

// user login
// import React from "react";

// function App() {
//   return (
//     <div className="w-full bg-light">
//       <nav className="bg-body-tertiary w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <div className="logo text-white font-semibold text-xl">WeCare</div>
//           <div className="contact text-white">Call Us : 080 2233447</div>
//         </div>
//       </nav>

//       <div className="py-10 text-center bg-gray-700 mt-20  w-1/2 mx-auto mt-20 rounded-lg">
//         <h1 className="text-white text-4xl font-bold mb-8 w-full">
//           Login As Life User
//         </h1>
//         <div className="container mx-auto  h-100">
//           <div className="rounded-lg py-8 px-4 shadow-md">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
//               id="password"
//               type="password"
//               placeholder="Enter your User Id"
//             />

//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="speciality"
//               type="text"
//               placeholder="Enter your Password"
//             />
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button className="text-white bg-green-500 py-2 px-4 w-full max-w-sm rounded-lg">
//             Login
//           </button>
//         </div>
//       </div>

//       <nav className="bg-body-tertiary fixed-bottom w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <a href="#" className="text-white">
//             Fixed bottom
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;

//appointment Coach Home Page

// import React from "react";

// function App() {
//   return (
//     <div className="w-full bg-light">
//       <nav className="bg-body-tertiary w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <div className="logo text-white font-semibold text-xl">WeCare</div>
//           <div className="contact text-white">Call Us : 080 2233447</div>
//         </div>
//       </nav>

//       <div className="py-10 text-center bg-gray-700 mt-20  w-1/2 mx-auto mt-20 rounded-lg">
//         <h5 className="text-white text-4xl  mb-8 w-full">Apointment Date:</h5>
//       </div>

//       <nav className="bg-body-tertiary fixed-bottom w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <a href="#" className="text-white">
//             Fixed bottom
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;

// ditail view

// import React from "react";

// function App() {
//   return (
//     <div className="w-full bg-light">
//       <nav className="bg-body-tertiary w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <div className="logo text-white font-semibold text-xl">WeCare</div>
//           <div className="contact text-white">Call Us : 080 2233447</div>
//         </div>
//       </nav>

//       <div className="py-10 text-center bg-light mt-20  w-1/2 mx-auto mt-20 rounded-lg">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="ml-2">
//                 <img
//                   src="image/women.png"
//                   className="rounded-full mx-auto w-48 rounded-full"
//                   alt="Coach Image"
//                 />
//               </div>
//               <div className="">
//                 <h3>Rose</h3>
//                 <h5>Coach Id : 1</h5>
//                 <p>Mobile No: 0755 91 38 58</p>
//                 <p>Speciality : Confidence Issue</p>
//                 <br />
//                 <a
//                   href="login.html"
//                   className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md px-3 py-1 "
//                 >
//                   Book an Appointment
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="ml-2">
//                 <img
//                   src="image/women.png"
//                   className="rounded-full mx-auto w-48 rounded-full"
//                   alt="Coach Image"
//                 />
//               </div>
//               <div className="">
//                 <h3>Rose</h3>
//                 <h5>Coach Id : 1</h5>
//                 <p>Mobile No: 0755 91 38 58</p>
//                 <p>Speciality : Confidence Issue</p>
//                 <br />
//                 <a
//                   href="login.html"
//                   className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md px-3 py-1 "
//                 >
//                   Book an Appointment
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="ml-2">
//                 <img
//                   src="image/women.png"
//                   className="rounded-full mx-auto w-48 rounded-full"
//                   alt="Coach Image"
//                 />
//               </div>
//               <div className="">
//                 <h3>Rose</h3>
//                 <h5>Coach Id : 1</h5>
//                 <p>Mobile No: 0755 91 38 58</p>
//                 <p>Speciality : Confidence Issue</p>
//                 <br />
//                 <a
//                   href="login.html"
//                   className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md px-3 py-1 "
//                 >
//                   Book an Appointment
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="ml-2">
//                 <img
//                   src="image/women.png"
//                   className="rounded-full mx-auto w-48 rounded-full"
//                   alt="Coach Image"
//                 />
//               </div>
//               <div className="">
//                 <h3>Rose</h3>
//                 <h5>Coach Id : 1</h5>
//                 <p>Mobile No: 0755 91 38 58</p>
//                 <p>Speciality : Confidence Issue</p>
//                 <br />
//                 <a
//                   href="login.html"
//                   className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md px-3 py-1 "
//                 >
//                   Book an Appointment
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="ml-2">
//                 <img
//                   src="image/women.png"
//                   className="rounded-full mx-auto w-48 rounded-full"
//                   alt="Coach Image"
//                 />
//               </div>
//               <div className="">
//                 <h3>Rose</h3>
//                 <h5>Coach Id : 1</h5>
//                 <p>Mobile No: 0755 91 38 58</p>
//                 <p>Speciality : Confidence Issue</p>
//                 <br />
//                 <a
//                   href="login.html"
//                   className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md px-3 py-1 "
//                 >
//                   Book an Appointment
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="grid grid-cols-2 gap-1">
//               <div className="ml-2">
//                 <img
//                   src="image/women.png"
//                   className="rounded-full mx-auto w-48 rounded-full"
//                   alt="Coach Image"
//                 />
//               </div>
//               <div className="">
//                 <h3>Rose</h3>
//                 <h5>Coach Id : 1</h5>
//                 <p>Mobile No: 0755 91 38 58</p>
//                 <p>Speciality : Confidence Issue</p>
//                 <br />
//                 <a
//                   href="login.html"
//                   className="btn-primary w-full mb-4 bg-blue-500 h-10 text-center text-white rounded-md px-3 py-1 "
//                 >
//                   Book an Appointment
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <nav className="bg-body-tertiary fixed-bottom w-full">
//         <div className="mx-auto flex justify-between py-4 bg-gray-700 w-full">
//           <a href="#" className="text-white">
//             Fixed bottom
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;
