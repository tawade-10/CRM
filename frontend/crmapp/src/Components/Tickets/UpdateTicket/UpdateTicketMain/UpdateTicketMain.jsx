import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import "./UpdateTicketMain.css";

const Leads = () => {
  return (
    <div className="update-ticket-display-page">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="update-ticket-grid-section"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Leads;
