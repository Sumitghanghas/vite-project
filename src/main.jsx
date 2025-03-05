import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/components/login/login.jsx";
import Signup from "../src/components/signup/signup.jsx";
import App from "./App.jsx";
import "./index.css";

const RootComponent = () => {
  const [auth, setauth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/auth/check", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setauth(true);
        } else {
          setauth(false);
        }
      } catch (error) {
        console.log("Error checking auth:");
        setauth(false);
      }
    };

    checkAuth(); 
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/whatsapp" /> : <Login setauth={setauth} />} />
        <Route path="/whatsapp" element={auth ? <App /> : <Navigate to="/" />} />
        <Route path="/signup" element={auth ? <Navigate to="/whatsapp" /> : <Signup />} />
      </Routes>
    </Router>
  );
};


createRoot(document.getElementById("root")).render(<RootComponent />);