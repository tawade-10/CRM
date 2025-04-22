import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import TicketDetailsForm from "../TicketDetailsForm/TicketDetailsForm";
import "./TicketDetailsMain.css";

const TicketDetailsMain = () => {
  return (
    <div className="tickets-form-display-page">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="leads-grid-section">
          <TicketDetailsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TicketDetailsMain;
