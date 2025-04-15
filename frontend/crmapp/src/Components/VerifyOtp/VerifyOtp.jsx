import React, { useState } from "react";
import PasswordReset from "../PasswordReset/PasswordResetForm/PasswordReset";
import {
  sendPasswordResetOtp,
  verifyPasswordResetOtp,
} from "./../Services/Services";

const VerifyOtp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  const [resetError, setResetError] = useState("");
  const [verifyError, setVerifyError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setResetError("");
    try {
      const response = await sendPasswordResetOtp(email);
      if (response.status === 200) {
        setShowVerifyOtp(true);
      } else {
        setResetError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setResetError("An error occurred while sending OTP.");
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    setVerifyError("");
    try {
      const response = await verifyPasswordResetOtp(email, otp);
      if (response.status === 200) {
        // Redirect the user to the new password reset form
        console.log("OTP Verified Successfully! ");
        // In a real application, navigate to the reset password form here.
      } else {
        setVerifyError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setVerifyError("An error occurred during OTP verification.");
      console.error("Error verifying OTP:", error);
    }
  };

  const formSwitcher = (form) => {
    if (form === "login") {
      window.location.href = "/login";
    }
  };

  return (
    <div>
      {!showVerifyOtp ? (
        <PasswordReset
          email={email}
          handleOnChange={handleEmailChange}
          handleResetSubmit={handleResetSubmit}
          formSwitcher={formSwitcher}
        />
      ) : (
        <VerifyOtp
          otp={otp}
          handleOnChange={handleOtpChange}
          handleVerifySubmit={handleVerifySubmit}
          formSwitcher={formSwitcher}
        />
      )}
      {resetError && <p className="text-danger">{resetError}</p>}
      {verifyError && <p className="text-danger">{verifyError}</p>}
    </div>
  );
};

export default VerifyOtp;
