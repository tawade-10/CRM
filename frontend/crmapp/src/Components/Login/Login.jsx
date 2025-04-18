import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ handleLoginSuccess }) => {
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); 

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await axios.post(
        "http://localhost:8080/loginUser",
        loginData
      );

      console.log("Login Response:", response.data);
      if (response.status === 200 && response.data.username) {
        localStorage.setItem("loggedInUsername", response.data.username); // Store username
        if (handleLoginSuccess) {
          handleLoginSuccess(response.data);
        }
        history("/dashboard");
      } else {
        setError("Login failed. Please check your username and password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Login failed. An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-info text-center">Login</h1>
          <hr />

          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <div className="login-field">
              <label htmlFor="username">Enter username</label>
              <input
                type="text"
                name="username"
                id="text"
                onChange={handleOnChange}
                value={loginData.username}
                required
              />
            </div>
            <br />
            <div className="login-field">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleOnChange}
                value={loginData.password}
                required
              />
            </div>
            <br />
            <button className="btn" type="submit">
              Submit
            </button>
            <br />
            <div className="forget-password">
              <a href="/forgot">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;