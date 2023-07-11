import React, { useState } from "react";
import "../assets/css/Content.css";

const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(document.getElementById("text-area").value);
  };
  return (
    <div className="main-content">
      <textarea id="text-area"></textarea>
      <button id="displayTextBtn" onClick={handleButtonClick}>
        Display Text
      </button>
      {displayText && <p id="underBtnText">{displayText}</p>}
    </div>
  );
};

export default Content;
