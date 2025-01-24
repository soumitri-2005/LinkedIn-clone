import React from "react";
import "../componentsCss/Sidebar.css";
import { Avatar } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import backPic from "../assets/linkedin-bg.jpeg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

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
          <Avatar className="sidebar-avatar" src={user.photoUrl}>
            {user?.email[0]}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>

        <div className="top-stats">
          <div className="sidebar-stat">
            <p>Profile views</p>
            <p className="sidebar-stat-number">30</p>
          </div>
          <div className="sidebar-stat">
            <p>Post impression</p>
            <p className="sidebar-stat-number">277</p>
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
