import "./Content.css";
import { useState, useEffect } from "react";
import fetchRequest from "../FetchRequest/FetchRequest";
import { useParams } from "react-router-dom";
function Content(props) {
  let { CountryURL } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    if (CountryURL !== undefined) {
      fetchRequest(`name/${CountryURL}?fullText=true`, setData);
    } else {
      fetchRequest("all", setData);
    }
  }, [CountryURL]);

  function Search_country() {
    const Search_Value = document.getElementById("search").value;
    fetchRequest(`name/${Search_Value}?fullText=true`, setData);
  }

  function Filter_Countries(e) {
    const value = e.target.value.toLowerCase();
    if (value === "all") {
      return fetchRequest("all", setData);
    }
    fetchRequest(`region/${value}`, setData);
  }

  function transfer(Name) {
    window.location.href = `/${Name}`;
  }

  return (
    <div className={`Content ${props.Mode}-content`}>
      <div className="Search_Filter">
        <div className="search">
          <button
            id="search_button"
            className={props.Mode}
            onClick={Search_country}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            id="search"
            placeholder="Search for a country..."
            className={props.Mode}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                Search_country();
              }
            }}
          />
        </div>
        <div className="filter">
          <select
            id="filter"
            className={props.Mode}
            onChange={Filter_Countries}
            defaultValue={"all"}
          >
            <option value="all">
              Filter by Region
            </option>
            <option value="Africa" key="Africa">
              Africa
            </option>
            <option value="America" key="America">
              America
            </option>
            <option value="Asia" key="Asia">
              Asia
            </option>
            <option value="Europe" key="Europe">
              Europe
            </option>
            <option value="Oceania" key="Oceania">
              Oceania
            </option>
          </select>
        </div>
      </div>
      <div className="Countries">
        {Data.map((item) => {
          return (
            <section
              key={item.name.common}
              className={`Card ${props.Mode}-card-mode`}
              onClick={function () {
                transfer(item.name.common);
              }}
            >
              <article key={item.name.common}>
                <img
                  className="Flag"
                  src={item.flags.png}
                  alt={`Flag ${item.flag}`}
                />
                <div className="description">
                  <h4>{item.name.official}</h4>
                  <ul>
                    <li>Capital: {item.capital}</li>
                    <li>Region: {item.region}</li>
                    <li>Population: {item.population}</li>
                  </ul>
                </div>
              </article>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
