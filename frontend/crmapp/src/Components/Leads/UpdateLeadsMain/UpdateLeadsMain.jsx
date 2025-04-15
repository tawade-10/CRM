import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import MeetingRecordsTable from "../../MeetingRecords/MeetingRecordsTable/MeetingRecordsTable";
import SideBar from "../../SideBar/SideBar";
import UpdateLeadsForm from "../UpdateLeadsForm/UpdateLeadsForm";
import "./UpdateLeadsMain.css";

const UpdateLeads = () => {
  return (
    <div className="update-leads-page">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="update-leads-form-section">
          <UpdateLeadsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateLeads;
