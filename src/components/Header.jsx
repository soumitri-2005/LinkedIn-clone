import React from "react";
import "../componentsCss/Header.css";
import linedinLogo from "../assets/linkedin.png";
import avatarPic from "../assets/girl-s-face-with-beautiful-smile-female-avatar-website-social-network_499739-527.jpg";
import HeaderOptions from "./HeaderOptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";


const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={linedinLogo} alt="" />
        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={avatarPic} title="me"/>
      </div>
    </div>
  );
};

export default Header;
