import React from "react";
import leads from "../../Assets/Data/dummy-tickets.json";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import ConnectionsTable from "../ConnectionsTable/ConnectionsTable";
import "./ConnectionsMain.css"

const Connections = () => {
  return (
    <div className="connections">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="right-content-connections">
          <div className="connections-details">
            <ConnectionsTable leads={leads} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Connections;
