import React, { useRef } from "react";
import search from "../../assets/icon-search.svg";
import "./search.css";

function Search({ theme, setLogin, loginRes }) {
  const login = useRef();

  return (
    <>
      <div className="search-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLogin(login.current.value);
          }}
          className="search-from"
        >
          <img src={search} alt="search" id="search-icon" />
          <div className="no-res" style={loginRes ? {} : { display: "none" }}>
            No results
          </div>
          <input
            type="search"
            name="finder"
            id="search"
            className={`${theme}-search`}
            placeholder="Search GitHub username…"
            ref={login}
            spellCheck="false"
            autoComplete="off"
          />

          <input type="submit" value="Search" className="button" />
        </form>
      </div>
    </>
  );
}
export default Search;
