import React from "react";
import leads from "../../Assets/Data/dummy-tickets.json";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import LeadsTable from "../../Leads/LeadsTable/LeadsTable";
import SideBar from "../../SideBar/SideBar";

const Leads = () => {
  return (
    <div className="update-master-display-page">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="update-master-grid-section">
          <LeadsTable leads={leads} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leads;
