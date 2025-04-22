import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import "./EditProfileMain.css";

const CustomersMain = () => {
  return (
    <div className="profile-display-page">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="profile-grid-section"></div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomersMain;
