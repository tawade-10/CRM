import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import AddMeetingForm from "../AddMeetingForm/AddMeetingForm";

const AddMeetingMain = () => {
  return (
    <div className="meeting-records">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="right-content">
          <AddMeetingForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddMeetingMain;
