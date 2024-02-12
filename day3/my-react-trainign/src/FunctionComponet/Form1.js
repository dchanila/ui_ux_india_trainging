// import { useState, useEffect } from "react";
// // create -- perform decrement logic
// function Form() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`clicked  ${count} times`);
//   }, []);
//   //[],[count]  as second argument  to suppress side effects like life cycle methods

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}> ++ </button>
//       <button onClick={() => setCount(count - 1)}> --</button>
//       {count}
//     </div>
//   );
// }
// export default Form;
// import { useForm } from "react-hook-form"; //npm install react-hook-form
// const Form1 = () => {
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
// };
// export default Form;
