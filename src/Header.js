import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          name=""
          placeholder="Search for the Songs ,or podcasts"
          id=""
        />
      </div>

      <div className="header__right">
        <Avatar src="" alt="name" />
        <h4>Name</h4>
      </div>
    </div>
  );
}

export default Header;
