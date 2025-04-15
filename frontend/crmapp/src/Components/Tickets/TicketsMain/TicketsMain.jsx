import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import "./TicketsMain.css";

const Tickets = () => {
  return (
    <div className="tickets">
      <Header isDashboard={true} />
      <div className="main-content">
        <SideBar />
        <div className="right-content"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Tickets;
