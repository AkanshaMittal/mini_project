import { useState } from "react"
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {

    const [isopen, Setopen] = useState(false)
    const handleClick = () => {
        Setopen(!isopen)
    }
    return (
        <div
        className="container"
        style={{ backgroundColor: isopen ? "green" : "red" }}
      >
        <div className="toggle-switch" onClick={handleClick}>
        <div className={`switch ${isopen ? "ON" : "OFF"}`}>
        {isopen ? "ON" : "OFF"}
          <span className="switch-state"></span>
        </div>

        </div>
        </div>
    )
}