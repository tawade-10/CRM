import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import MasterDatabaseTable from "../MasterDatabaseTable/MasterDatabaseTable";

const MasterDatabaseMain = () => {
  return (
    <div className="meeting-records">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="right-content">
          <MasterDatabaseTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MasterDatabaseMain;
