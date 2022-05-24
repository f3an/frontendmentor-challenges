import "./Header.css";

import Content from "../Content/Content";
import SingleCountryPage from "../SingleCountryPage/SingleCountryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [Mode, setMode] = useState("White");
  function Change_Mode() {
    Mode === "White" ? setMode("Black") : setMode("White");
  }
  return (
    <div className="App-body">
      <header className={`Header ${Mode}`}>
        <div className="logo">
          <h3
            onClick={function () {
              window.location.href = "/";
            }}
          >
            Where in the world?
          </h3>
        </div>
        <div className="Mode" onClick={Change_Mode}>
          <i className="fa-solid fa-moon"></i>
          Dark Mode
        </div>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Content Mode={Mode} />} />
          <Route
            exact
            path="/:CountryURL"
            element={<SingleCountryPage Mode={Mode}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Header;
