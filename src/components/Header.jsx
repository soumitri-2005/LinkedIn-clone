import React from "react";
import "../componentsCss/Header.css";
import linedinLogo from "../assets/linkedin.png";
import HeaderOptions from "./HeaderOptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContrastIcon from '@mui/icons-material/Contrast';
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";


const Header = ({ switchTheme }) => {
  const dispatch = useDispatch();
  const logOutApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header-left">
        <img src={linedinLogo} alt="" />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="header-right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions Icon={ContrastIcon} title="Theme" onClick={switchTheme}/>
        <HeaderOptions avatar={true} title="Me" onClick={logOutApp} />
      </div>
    </div>
  );
};

export default Header;
