import React, { useState } from "react";

const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(document.getElementById("text-area").value);
  };
  return (
    <div>
      <textarea id="text-area"></textarea>
      <button onClick={handleButtonClick}>Display Text</button>
      {displayText && <p>{displayText}</p>}
    </div>
  );
};

export default Content;
