import { useEffect, useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOpen, setOpen] = useState(false);
  const [dateTime, setDatetime] = useState("");
  const styling = { width: "187px", height: "182px", marginLeft: "200px" };

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDatetime(`${formattedDate} ${formattedTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: isOpen ? "#FFED29" : "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* Date & Time just above the button */}
      <div className="toggle-date" style={{ marginBottom: "10px", fontSize: "18px", fontWeight: "500" }}>
        {dateTime}
      </div>

      <div className="toggle-switch" onClick={handleClick}>
        <div className={`switch ${isOpen ? "ON" : "OFF"}`}>
          {isOpen ? "ON" : "OFF"}
          <span className="switch-state"></span>
        </div>
        <img src={isOpen ? "ONButton.jpg" : "OFFButton.jpg"} style={styling} alt="Toggle Button" />
      </div>
    </div>
  );
};
