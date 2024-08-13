import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/sign-up",
      element: <SignupForm />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      <div></div>
    </>
  );
}

export default App;
