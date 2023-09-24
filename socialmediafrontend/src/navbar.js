import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    // Perform sign-in logic here
    // For this example, we'll just toggle the sign-in status
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <nav>
        <h1>Connectopia</h1>
        {isLoggedIn ? (
          <Link id="home" to="/">
            Home
          </Link>
        ) : null}

        {isLoggedIn ? (
          <Link id="dashboard" to="/dashboard">
            Dashboard
          </Link>
        ) : null}
        <Link id="signup" to="/signup">
          Signup
        </Link>

        <Link id="signin" to="/signin" onClick={handleSignIn}>
          Signin
        </Link>
      </nav>
    
    </div>
  );
}

export default Navbar;
