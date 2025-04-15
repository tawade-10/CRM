import React from "react";
import SideBarData from "../SideBarData/SideBarData";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarLinks">
        {SideBarData.map((val, key) => {
          return (
            <a
              key={key}
              href={val.link}
              className="sidebar-link"
              id={window.location.pathname === val.link ? "active" : ""}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
