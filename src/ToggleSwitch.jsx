import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOpen, setOpen] = useState(false);

  const styling = { width: "187px", height: "182px", marginLeft: "200px" };
  const condition=isOpen ? "ON" : "OFF"

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="container" style={{ backgroundColor: isOpen ? "#FFED29" : "white" }}>
      <div className="toggle-switch" onClick={handleClick}>
        <div></div>
        <div className={`switch ${condition}`}>
          {condition}
          <span className="switch-state"></span>
        </div>
        <img src={isOpen ? "ONButton.jpg" : "OFFButton.jpg"} style={styling} alt="Toggle Button" />
      </div>
    </div>
  );
};
