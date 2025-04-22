import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import UpdateMeetingForm from "../UpdateMeetingForm/UpdateMeetingForm";
import "./UpdateMeetingMain.css";

const UpdateMeetingMain = () => {
  return (
    <div className="update-meeting-display-page">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="update-meeting-grid-section">
            <UpdateMeetingForm/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateMeetingMain;
