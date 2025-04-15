import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import TicketsTable from "../TicketsTable/TicketsTable";
import "./TicketsMain.css";

const Leads = () => {
  return (
    <div className="tickets-display-page">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="leads-grid-section">
          <TicketsTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leads;
