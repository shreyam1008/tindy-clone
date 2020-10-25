import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
