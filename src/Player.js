import React from "react";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
function Player({ spotify }) {
  return (
    <div classname="player">
      <div classname="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default Player;
