import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import LeadsDetailsForm from "../LeadsDetailsForm/LeadsDetailsForm";
import "./LeadsDetailsMain.css"; // Create LeadsDetails.css

const LeadsDetails = () => {
  return (
    <div className="leads-details">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="leads-detail-grid-section">
          <LeadsDetailsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeadsDetails;
