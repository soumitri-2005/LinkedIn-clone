import React from "react";
import "../componentsCss/HeaderOptions.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="header-option-icon" />}
      {avatar && (
        <Avatar className="header-option-icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="header-option-title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
