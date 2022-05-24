import "./SinglePageStyle.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchRequest from "../FetchRequest/FetchRequest";

function SingleCountryPage(props) {
  let location = useParams().CountryURL;

  const [Data, setData] = useState([]);

  useEffect(() => {
    if (location !== undefined) {
      fetchRequest(`name/${location}?fullText=true`, setData);
    } else {
      fetchRequest("all", setData);
    }
  }, [location]);
  return (
    <div className={`Content ${props.Mode}-content Details`}>
      <div className="Back_Btn">
        <button
          id="Back_Btn"
          onClick={function () {
            window.location.href = "/";
          }}
        >
          Back
        </button>
      </div>
      {Data.map((item) => {
        const Country_key = Object.keys(item.name.nativeName)[0];

        let Currency = "none";
        if ("currencies" in item) {
          Currency = item.currencies[Object.keys(item.currencies)].name;
        }

        const Languages = Object.keys(item.languages);

        let LanguagesInCountry = "";

        for (const language of Languages) {
          LanguagesInCountry += " " + item.languages[language] + ",";
        }

        LanguagesInCountry = LanguagesInCountry.substring(
          0,
          LanguagesInCountry.length - 1
        );

        console.log(item.borders);

        return (
          <div className="CoundtryDetails" key={item.name.common}>
            <img
              className="BigFlag"
              src={item.flags.png}
              alt={`Flag ${item.flag}`}
            />
            <div className="Big-description">
              <h4>{item.name.official}</h4>
              <ul className="list">
                <li>
                  Native Name: {item.name.nativeName[Country_key].official}
                </li>
                <li>Population: {item.population}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
                <li>Capital: {item.capital}</li>
                <li>Top Lavel Domain: {item.tld[0]} </li>
                <li>Currencies: {Currency}</li>
                <li>Languages:{LanguagesInCountry}</li>
              </ul>
              <div className="BorderCountries">
                Border Countries:
                <ul className={`${props.Mode}-ul`}>
                  {item.borders.map((border_country) => {
                    return <li key={border_country}>{border_country}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleCountryPage;
