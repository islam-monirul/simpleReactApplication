import React from "react";
import "../assets/css/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h2 id="title">{props?.title}</h2>
    </div>
  );
};

export default Header;
