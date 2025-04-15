import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyPasswordResetOtp } from "../../../Services/Services";
const OtpVerificationForm = ({ email, formSwitcher }) => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleOnChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await verifyPasswordResetOtp(email, otp);
      if (response.status === 200) {
        setMessage(response.data);
        history("/reset-password/new");
      } else {
        setError(response.data || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Verify OTP Error:", error);
      setError("An unexpected error occurred while verifying the OTP.");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="login-field">
          <label htmlFor="otp">Enter OTP sent to your email</label>
          <input
            type="text"
            name="otp"
            id="otp"
            onChange={handleOnChange}
            value={otp}
            required
          />
        </div>
        <br />
        <button className="btn" type="submit">
          Verify OTP
        </button>
        <br />
        <div className="forget-password">
          <button
            className="btn btn-link"
            onClick={() => formSwitcher("reset")}
          >
            Resend OTP
          </button>
          <a href="/login" onClick={() => formSwitcher("login")}>
            Back to Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default OtpVerificationForm;
