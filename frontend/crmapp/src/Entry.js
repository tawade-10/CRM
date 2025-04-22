import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import PasswordReset from "./Components/PasswordReset/PasswordResetForm/PasswordReset";

function Entry() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const navigate = useNavigate();

  console.log("Entry rendered - isAuthenticated:", isAuthenticated); // Log during rendering

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleLoginSuccessFromLogin = (userData) => {
    console.log("handleLoginSuccessFromLogin called with:", userData);
    setIsAuthenticated(true);
    console.log("isAuthenticated updated to:", isAuthenticated);
    navigate("/dashboard");
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Fill the required Details!");
      return;
    }

    const data = {
      username: username,
      password: password,
    };

    console.log("Login attempt with:", data); // Log before API call

    try {
      const response = await axios.post(
        "http://localhost:8080/loginUser",
        data
      );
      console.log("Login Response in Entry:", response.data);
      if (response.status === 200) {
        handleLoginSuccessFromLogin(response.data);
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error in Entry:", error);
      alert("Login Error. Please try again.");
    }
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter the Email!");
    }
    console.log({ email });
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} /> {/* Pass isAuthenticated as a prop */}
      {formLoad === "login" && (
        <Login
          handleOnChange={handleOnChange}
          username={username}
          password={password}
          handleSubmit={handleSubmit}
          formSwitcher={formSwitcher}
          handleLoginSuccess={handleLoginSuccessFromLogin}
        />
      )}
      {formLoad === "reset" && (
        <PasswordReset
          handleOnChange={handleOnChange}
          email={email}
          handleResetSubmit={handleResetSubmit}
          formSwitcher={formSwitcher}
        />
      )}
      <Footer />
    </div>
  );
}

export default Entry;