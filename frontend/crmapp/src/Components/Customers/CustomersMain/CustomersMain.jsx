import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import CustomersTable from "../CustomersTable/CustomersTable";
import "./CustomersMain.css";

const CustomersMain = () => {
  return (
    <div className="customers-display-page">
      <Header isAuthenticated={true} />
      <div className="main-content">
        <SideBar />
        <div className="customers-grid-section">
          <CustomersTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomersMain;
