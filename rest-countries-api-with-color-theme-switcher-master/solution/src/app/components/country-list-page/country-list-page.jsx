import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCountries } from '../../hooks/use-countries';
import './country-list.css';

function CountryListPage(props) {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [countries, isLoading, error] = useCountries(filter, search);

    if (error !== '') {
        return alert(error);
    }

    function searchOnClick() {
        const req = document.querySelector('#search').value;
        if (req !== '') {
            setSearch(req);
        }
    }

    return (
        <div>
            <div
                className={`${
                    // eslint-disable-next-line react/prop-types
                    props.theme
                }-search-filter search-filter`}
            >
                <div
                    className={`${
                        // eslint-disable-next-line react/prop-types
                        props.theme
                    }-search-bar`}
                    id="search-bar"
                >
                    <button id="search_button" onClick={searchOnClick}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search for a country..."
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                setSearch(e.target.value);
                            }
                        }}
                    />
                </div>

                <div className="filter">
                    <select
                        id="filter-select"
                        defaultValue=""
                        onChange={(e) => {
                            setFilter(e.target.value);
                        }}
                    >
                        <option value="">Filter by Region</option>
                        <option value="africa" key="Africa">
                            Africa
                        </option>
                        <option value="america" key="America">
                            America
                        </option>
                        <option value="asia" key="Asia">
                            Asia
                        </option>
                        <option value="europe" key="Europe">
                            Europe
                        </option>
                        <option value="oceania" key="Oceania">
                            Oceania
                        </option>
                    </select>
                </div>
            </div>
            <div
                className={`${
                    // eslint-disable-next-line react/prop-types
                    props.theme
                }-country-list`}
                id="country-list"
            >
                {countries.map((item) => {
                    return (
                        <Link
                            to={`/${item.name.common}`}
                            key={item.name.common}
                            style={{ textDecoration: 'none' }}
                        >
                            <section
                                key={item.name.common}
                                className={`card ${
                                    // eslint-disable-next-line react/prop-types
                                    props.theme
                                }-card-mode`}
                            >
                                <article key={item.name.common}>
                                    <img
                                        className="flag"
                                        src={item.flags.png}
                                        alt={`Flag ${item.flag}`}
                                    />
                                    <div className="description">
                                        <h3>{item.name.official}</h3>
                                        <ul>
                                            <li>Capital: {item.capital}</li>
                                            <li>Region: {item.region}</li>
                                            <li>
                                                Population: {item.population}
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </section>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default CountryListPage;
