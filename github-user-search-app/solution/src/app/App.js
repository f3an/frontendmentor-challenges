import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Search from "./components/search-container/search";
import useSearchByUsername from "./hooks/use-search-by-username";
import UserPage from "./components/user-page/user-page";
function App() {
  const [theme, setTheme] = useState("LIGHT");

  const [login, setLogin] = useState("octocat");

  let toggleTheme = () => {
    if (theme === "LIGHT") {
      setTheme("DARK");
    } else {
      setTheme("LIGHT");
    }
  };

  const loginData = useSearchByUsername(login);

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <Header theme={theme} changeTheme={toggleTheme} />
        <Search
          theme={theme}
          setLogin={setLogin}
          loginRes={loginData[0] ? loginData[0].message : "Loading"}
        />
        <UserPage userData={loginData[0]} theme={theme} />
      </div>
    </div>
  );
}

export default App;
