import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>

      <div></div>
    </>
  );
}

export default App;
