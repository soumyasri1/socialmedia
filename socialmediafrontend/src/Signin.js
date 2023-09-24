import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: formdata.email,
        password: formdata.password,
      };

      // Send the user data to the backend API using POST
      const response = await axios.post(
        "http://localhost:8000/api/signin",
        userData
      );

      console.log("Response from server:", response.data);
       
       
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignIn = () => {
    navigate("/", { state: { isLoggedIn: true } });
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
      <h2>Signin</h2>
      <form id="Signin" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSignIn} id="signin">
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
