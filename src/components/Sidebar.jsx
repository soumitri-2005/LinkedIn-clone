import React from "react";
import "../componentsCss/Sidebar.css";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="" alt="" />
        <Avatar className="sidebar-avatar" />
        <h2>Soumitri Mishar</h2>
        <h4>soumitrimishra1@gmail.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-stat-number">2,547</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-stat-number">2,777</p>
        </div>
      </div>

      <div className="sidebar-butttom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
