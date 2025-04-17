import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import AddTicketForm from "../AddTicketForm/AddTicketForm";
import "./AddTicketMain.css";

const Leads = () => {
  return (
    <div className="tickets-form-display-page">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="leads-grid-section">
          <AddTicketForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leads;
