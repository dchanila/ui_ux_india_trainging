// import logo from "./logo.svg";
// import "./App.css";
// import { useForm } from "react-hook-form";
// function App() {
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (values) => alert(values.email + " " + values.password);
//   return (
//     <div className="app">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h1>Register</h1>
//         <div className="formInput">
//           <label>Email</label>
//           <input
//             type="email"
//             {...register("email", {
//               required: "Email cannot be empty",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: "invalid email address",
//               },
//             })}
//           />
//           {errors.email && errors.email.message}
//         </div>
//         <div className="formInput">
//           <label>Password</label>
//           <input
//             type="password"
//             {...register("password", {
//               required: "PAssword cannot be empty",
//               pattern: {
//                 value:
//                   /^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
//                 message:
//                   "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
//               },
//             })}
//           />
//           {errors.password && errors.password.message}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// function App() {
//   //parent
//   //state - mutable ,props- immutable
//   // eslint-disable-next-line
//   const [input, setInput] = useState({ name: "Sudaksha ReactUI Developer" });
//   return (
//     <div className="App">
//       Welcome to React training Parent compoent property : State : {input.name}
//       <Message city="Hyderabad" />
//       <Country name="Tanzania" />
//     </div>
//   );
// }

// //arraow function
// const Country = ({ name }) => {
//   return <div> Country name is from Parent : {name} </div>;
// };
// // <Message />   named functions
// function Message({ city }) {
//   return (
//     <p>
//       {" "}
//       <h1>From Child {city}</h1>{" "}
//     </p>
//   );
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const [input, setInput] = useState([
//     { name: "emma chanila", typeOfLeave: "sick", action: "" },
//     { name: "deus", typeOfLeave: "pertenet", action: "" },
//     { name: "meshack", typeOfLeave: "sick", action: "" },
//   ]);
//   const [action, setAction] = useState("");

//   return (
//     <div className="App">
//       {/* Pass input array to Employee component */}
//       <Manager input={input} />
//       <div>{action}</div>
//       <button onClick={() => setAction("Approved")}> Approve </button>
//       <button onClick={() => setAction("Reject")}> Reject </button>
//     </div>
//   );
// }

// const Manager = ({ input }) => {
//   // Iterate over input array and display each item
//   return (
//     <div>
//       <h1>Manager</h1>
//       {/* Use map to render each item in the input array */}
//       {input.map((item, index) => (
//         <div key={index}>
//           {/* Access name property of each item */}
//           <p>
//             Employee:{" "}
//             {"Name: " + item.name + ", Type Of leave: " + item.typeOfLeave}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// function Message({ city }) {
//   return (
//     <p>
//       <h1>From Child {city}</h1>
//     </p>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [submitting, setSubmitting] = useState(false);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitting(true);

//     setTimeout(() => {
//       setSubmitting(false);
//     }, 5000);
//   };

//   return (
//     <div className="wrapper">
//       <h1>How About Them Apples</h1>
//       {submitting && <div>Submtting Form...</div>}
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <label>
//             <p>Name</p>
//             <input name="name" />
//           </label>
//         </fieldset>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// const App = () => {
//   var names = ["Nasur", "Rufaydah", "Dchanila", "Meshak"];

//   const [listItems, setInput] = useState({
//     names: ["Nasur", "Rufaydah", "Dchanila", "Meshak"],
//   });

//   return (
//     <div>
//       <h2>
//         Welcome,{" "}
//         {names.map((index, name) => (
//           <li>
//             {index}, {name}
//           </li>
//         ))}
//       </h2>
//       <br />
//     </div>
//   );
// };

// export default App;
// const courses = [
//   { id: "101", name: "CSS", duration: 5 },
//   { id: "102", name: "JS", duration: 5 },
//   { id: "103", name: "ReactJS", duration: 5 },
// ];
// const dsg = ["SA", "Manager", "QA", "DevopsEngineer", "FSD"];
// const App = () => {
//   const list = courses.map((course) => (
//     <li>
//       id: {course.id} name: {course.name} duration: {course.duration}
//     </li>
//   ));
//   const dlist = dsg.map((dname) => <li>{dname}</li>);
//   return (
//     <div className="container">
//       <div>
//         <h1>Render list Objects</h1>
//       </div>
//       <div>
//         <ul>{list}</ul>
//       </div>
//       <div>
//         <ul>{dlist}</ul>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Form2 from "./Form2";
import "./style.css";
//npm install react-router-dom
export default function App() {
  return (
    // <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
      <div>
        <Form2 />
      </div>
    </div>

    // </Router>
  );
}
/*http://localhost:3001/contact/123  */
