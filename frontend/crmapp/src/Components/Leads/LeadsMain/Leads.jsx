import React from "react";
import leads from "../../Assets/Data/dummy-tickets.json";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import LeadsTable from "../LeadsTable/LeadsTable"; // Renamed component
import "./Leads.css";

const Leads = () => {
  return (
    <div className="leads-display-page">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="leads-grid-section">
          <LeadsTable leads={leads} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leads;
