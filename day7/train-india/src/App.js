// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from "./components/About";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Form2 from "./Form2";
// import "./style.css";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">
//                 <button>Home</button>
//               </Link>
//             </li>
//             <li>
//               <Link to="/about">
//                 <button>About</button>
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact/123">
//                 <button>Contact</button>
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <hr />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact/:id" element={<Contact />} />
//         </Routes>
//         <div>
//           <Form2 />
//         </div>
//       </div>
//     </Router>
//   );
// }

// /*http://localhost:3001/contact/123  */
// import React, { Component } from "react";
// import "./App.css";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Button variant="primary">Primary</Button>
//         <Button variant="secondary">Secondary</Button>
//         <Button variant="success">Success</Button>
//         <Button variant="warning">Warning</Button>
//         <Button variant="danger">Danger</Button>
//         <h2>Welcome</h2>
//         <h1>Hello</h1>
//         <br />
//         <Form>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>

//           <Form.Group controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default App;

// export default App;

// import UserFetch from "./UserFetch";
// function App() {
//   //parent
//   const { data } = UserFetch("https://api.github.com/users");
//   return (
//     <div>
//       <p> learn react </p>
//       {data &&
//         data.map((user) => (
//           <div className="text-white" key={user.id}>
//             <table>
//               <tr>
//                 <id> {user.login} </id>

//                 <td> {user.type} </td>
//                 <td> {user.site_admin} </td>
//                 <td> {user.node_id} </td>
//               </tr>
//             </table>
//           </div>
//         ))}
//     </div>
//   );
// }
// export default App;
// import React, { useState, Fragment } from "react";
// import AddUserForm from "./forms/AddUserForm";
// import EditUserForm from "./forms/EditUserForm";
// import UserTable from "./tables/UserTable";

// const App = () => {
//   // Data
//   const usersData = [
//     { id: 1001, name: "Tania", salary: 50000, department: "IT" },
//     { id: 1002, name: "Craig", salary: 90000, department: "IT" },
//     { id: 1003, name: "Ben", salary: 80000, department: "IT" },
//   ];

//   const initialFormState = { id: null, name: "", salary: "", department: "" };

//   // Setting state
//   const [users, setUsers] = useState(usersData);
//   const [currentUser, setCurrentUser] = useState(initialFormState);
//   const [editing, setEditing] = useState(false);

//   // CRUD operations
//   const addUser = (user) => {
//     user.id = users.length + 1;
//     setUsers([...users, user]);
//   };

//   const deleteUser = (id) => {
//     setEditing(false);

//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const updateUser = (id, updatedUser) => {
//     setEditing(false);

//     setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
//   };

//   const editRow = (user) => {
//     setEditing(true);

//     setCurrentUser({
//       id: user.id,
//       name: user.name,
//       salary: user.salary,
//       department: user.department,
//     });
//   };

//   return (
//     <div className="container">
//       <h1>CRUD App with Hooks</h1>
//       <div className="flex-row">
//         <div className="flex-large">
//           {editing ? (
//             <Fragment>
//               <h2>Edit user</h2>
//               <EditUserForm
//                 editing={editing}
//                 setEditing={setEditing}
//                 currentUser={currentUser}
//                 updateUser={updateUser}
//               />
//             </Fragment>
//           ) : (
//             <Fragment>
//               <h2>Add user</h2>
//               <AddUserForm addUser={addUser} />
//             </Fragment>
//           )}
//         </div>
//         <div className="flex-large">
//           <h2>View users</h2>
//           <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js filter table
// import React from "react";
// import "./App.css";

// import FilterTableComponent from "./components/filter.table";

// function App() {
//   return (
//     <div>
//       <FilterTableComponent />
//     </div>
//   );
// }
//useRef
// export default App;

// import { useRef } from "react";

// export default function App() {
//   const n = useRef(0);

//   const handle = () => {
//     n.current++;
//     console.log(`Clicked ${n.current} times`);
//   };
//   return <button onClick={handle}>Click me</button>;
// }

import { useRef, useState, useEffect } from "react";

export default function App() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
