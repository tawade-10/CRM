import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetOtp } from "../../Services/Services";
import OtpVerificationForm from "../../PasswordReset/OtpVerification/OtpVerificationForm/OtpVerificationForm";

const NewPasswordForm = ({ formSwitcher }) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await sendPasswordResetOtp(email);
      if (response.status === 200) {
        setMessage(response.data);
        setOtpSent(true);
      } else {
        setError(response.data || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Send OTP Error:", error);
      setError("An unexpected error occurred while sending the OTP.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />

          {!otpSent ? (
            <form onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}
              {message && <p className="success-message">{message}</p>}
              <div className="login-field">
                <label htmlFor="email">Enter your email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleOnChange}
                  value={email}
                  required
                />
              </div>
              <br />
              <button className="btn" type="submit">
                Send OTP
              </button>
              <br />
              <div className="forget-password">
                <a href="/login" onClick={() => formSwitcher("login")}>
                  Back to Login
                </a>
              </div>
            </form>
          ) : (
            <OtpVerificationForm email={email} formSwitcher={formSwitcher} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPasswordForm;
