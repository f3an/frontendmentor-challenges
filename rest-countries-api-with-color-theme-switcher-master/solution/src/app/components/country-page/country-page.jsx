import React from 'react';
import { useParams, Link } from 'react-router-dom';

import './country-page.css';

import { useCountry } from '../../hooks/use-country';

function CountryPage(props) {
    const location = useParams().countryURL.toLowerCase();
    const country = useCountry(location)[0];

    return (
        <div
            className={`${
                // eslint-disable-next-line react/prop-types
                props.theme
            }-country-container country-container`}
        >
            <div className="btn-container">
                <Link to="/">
                    <button id="btn">Back</button>
                </Link>
            </div>

            {country.map((item) => {
                const countryKey = Object.keys(item.name.nativeName)[0];

                const languages = Object.keys(item.languages);

                let languagesInCountry = '';

                for (const language of languages) {
                    languagesInCountry += ' ' + item.languages[language] + ',';
                }

                languagesInCountry = languagesInCountry.substring(
                    0,
                    languagesInCountry.length - 1
                );

                let currency = 'none';
                if (item.currencies !== undefined) {
                    currency = [];
                    for (const curr of Object.keys(item.currencies)) {
                        currency.push(curr);
                    }
                }

                const borderCountries =
                    item.borders === undefined ? ['none'] : item.borders;

                return (
                    <div className="country-details" key={item.name.common}>
                        <img
                            // eslint-disable-next-line react/prop-types
                            className={`${props.theme}-flag big-flag`}
                            src={item.flags.png}
                            alt={`Flag ${item.flag}`}
                        />
                        <div className="big-description">
                            <h2>{item.name.official}</h2>
                            <ul className="list">
                                <li>
                                    Native Name:{' '}
                                    {item.name.nativeName[countryKey].official}
                                </li>
                                <li>Population: {item.population}</li>
                                <li>Region: {item.region}</li>
                                <li>Subregion: {item.subregion}</li>
                                <li>Capital: {item.capital}</li>
                                <li>Top Lavel Domain: {item.tld[0]} </li>
                                <li>Currencies: {currency.toString()}</li>
                                <li>Languages:{languagesInCountry}</li>
                            </ul>
                            <div className="border-countries">
                                Border Countries:
                                <ul
                                    className={`${
                                        // eslint-disable-next-line react/prop-types
                                        props.theme
                                    }-ul`}
                                >
                                    {borderCountries.map((borderCountry) => {
                                        return (
                                            <li key={borderCountry}>
                                                {borderCountry}
                                            </li>
                                        );
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

export default CountryPage;
