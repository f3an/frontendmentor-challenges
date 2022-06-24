import "./header.css";
import React from "react";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";

function Header({ theme, changeTheme }) {
  const indicator =
    theme !== "LIGHT" ? <Sun className="sun" /> : <Moon className="moon" />;
  return (
    <>
      <div className="header">
        <div className="logo">devfinder</div>
        <div
          className={`thame-indicator ${theme}-indicator`}
          onClick={changeTheme}
        >
          <label htmlFor="svg" id="theme-label">
            {theme === "LIGHT" ? "DARK" : "LIGHT"}
          </label>
          {indicator}
        </div>
      </div>
    </>
  );
}
export default Header;
