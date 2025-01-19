import React from "react";
import "../componentsCss/Sidebar.css";
import { Avatar } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import backPic from "../assets/linkedin bg (2).png";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Sidebar = () => {
  const recentitem = (topic) => {
    return (
      <div className="sidebar-recent-item">
        <span className="sidebar-hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="top-profile">
          <img src={backPic} alt="" />
          <Avatar className="sidebar-avatar" />
          <h2>Soumitri Mishra</h2>
          <h4>
            B.Tech. CSE Student at ABIT | Aspiring <br /> Web Developer
          </h4>
        </div>

        <div className="top-stats">
          <div className="sidebar-stat">
            <p>Profile views</p>
            <p className="sidebar-stat-number">2,547</p>
          </div>
          <div className="sidebar-stat">
            <p>Post impression</p>
            <p className="sidebar-stat-number">2,777</p>
          </div>
        </div>

        <div className="top-premium">
          <p>Job search smarter and stand out</p>
          <div className="price">
            <WorkspacePremiumIcon className="premium-icon" />
            <h2>Try Premium for $0</h2>
          </div>
        </div>

        <div className="top-save">
          <BookmarkIcon className="save-icon" />
          <p>Saved items</p>
        </div>
      </div>

      <div className="sidebar-botttom">
        <p>Recent</p>
        {recentitem("Reactjs")}
        {recentitem("Programming")}
        {recentitem("Frontend developer")}
        {recentitem("Design")}
      </div>
    </div>
  );
};

export default Sidebar;
