import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import DeletedRecordsTable from "../DeletedRecordsTable/DeletedRecordsTable";

const DeletedRecords = () => {
  return (
    <div className="deleted-records-display-page">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="deleted-records-grid-section">
          <DeletedRecordsTable/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeletedRecords;
