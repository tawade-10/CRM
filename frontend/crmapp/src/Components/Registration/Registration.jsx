import axios from "axios"; // Import axios
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Registration.css";

const Registration = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(registerData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerData);

    const { email, username, password } = registerData;

    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Enter valid Email address");
    } else if (username === "") {
      alert("Username is required");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password too small!");
    } else {
      console.log("User Registered Successfully");

      localStorage.setItem(
        "tawade_10",
        JSON.stringify([...data, registerData])
      );
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/addUser",
        registerData
      );
      console.log("Registration successful:", response.data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register">
      <Header isRegistrationPage={true} />
      <div className="registration-container">
        <div className="registration-row">
          <div className="registration-col">
            <h1 className="registration-title">Registration</h1>
            <hr />

            <form>
              <div className="registration-field">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleOnChange}
                  value={registerData.email}
                  required
                />
              </div>
              <br />
              <div className="registration-field">
                <label htmlFor="username">Enter Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleOnChange}
                  value={registerData.username}
                  required
                />
              </div>
              <br />
              <div className="registration-field">
                <label htmlFor="password">Enter Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleOnChange}
                  value={registerData.password}
                  required
                />
              </div>
              <br />
              <button
                onClick={handleSubmit}
                className="registration-btn"
                type="submit"
              >
                Register
              </button>
              <div className="login-page">
                <a href="/login">Already have an Account?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
