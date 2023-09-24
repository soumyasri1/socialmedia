import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create an object with user data
      const userData = {
        username: formdata.username,
        email: formdata.email,
        password: formdata.password,
      };

      // Send the user data to the backend API
      const response = await axios.post(
        "http://localhost:8000/api/register",
        userData
      );
      console.log("Response from server:", response.data);

      // Reset the form data after submission
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/Signin");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form id="Signup" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formdata.username}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formdata.email}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formdata.password}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={formdata.confirmPassword}
          />
        </div>
        <button type="submit" id="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
