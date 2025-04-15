import React from "react";
import AddLeadsForm from "../AddLeadsForm/AddLeadsForm";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import "./AddLeadsMain.css"

const AddLeadsMain = () => {
  return (
    <div className="Addleads">
      <Header isDashboard={true} isAddLeadsPage={true} />
      <div className="main-content">
        <SideBar />
        <div className="right-content">
          <div className="add-lead-white-container">
            <div className="addLeadsFormWrapper">
              <AddLeadsForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddLeadsMain;
