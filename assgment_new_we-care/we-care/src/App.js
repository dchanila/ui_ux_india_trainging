import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent/HomeComponent";
import CoachSignUp from "./SignUp/CoachSignUp";
import UserSignup from "./SignUp/UserSignup";
import LoginAsCoach from "./SignIn/LoginAsCoach";
import LoginAsUser from "./SignIn/LoginAsUser";
import Welcomeuser from "./welcome/Welcomuser";
import WelcomeCoach from "./welcome/WelcomeCoach";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/joinAsCoach" element={<CoachSignUp />} />
        <Route path="/joinAsUser" element={<UserSignup />} />
        <Route path="/loginAsCoach" element={<LoginAsCoach />} />
        <Route path="/loginAsUser" element={<LoginAsUser />} />
        <Route path="/welcome-user" element={<Welcomeuser />} />
        <Route path="/welcome-coach" element={<WelcomeCoach />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
