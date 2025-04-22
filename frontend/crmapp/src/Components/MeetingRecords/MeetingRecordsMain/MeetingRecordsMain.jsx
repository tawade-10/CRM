import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import MeetingRecordsTable from "../MeetingRecordsTable/MeetingRecordsTable";

const MeetingRecordsMain = () => {
  return (
    <div className="meeting-records">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="right-content">
          <MeetingRecordsTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeetingRecordsMain;
