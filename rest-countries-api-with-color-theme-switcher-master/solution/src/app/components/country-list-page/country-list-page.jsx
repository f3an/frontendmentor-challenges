import React from 'react';
import { useState } from 'react';
import CountryCard from '../country-card/country-card';

import { useCountries } from '../../hooks/use-countries';
import './country-list.css';

// eslint-disable-next-line react/prop-types
function CountryListPage({ theme }) {
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
                    theme
                }-search-filter search-filter`}
            >
                <div
                    className={`${
                        // eslint-disable-next-line react/prop-types
                        theme
                    }-search-bar`}
                    id="search-bar"
                >
                    <div className="search-bar-container">
                        <button
                            className={`${
                                // eslint-disable-next-line react/prop-types
                                theme
                            }-search`}
                            id="search_button"
                            onClick={searchOnClick}
                        >
                            <i className="fa-solid fa-magnifying-glass "></i>
                        </button>
                        <input
                            className={`${
                                // eslint-disable-next-line react/prop-types
                                theme
                            }-search`}
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
                </div>

                <div className="filter">
                    <select
                        className={`${theme}-filter-select`}
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
                    theme
                }-country-list`}
                id="country-list"
            >
                <CountryCard countries={countries} theme={theme} />
            </div>
        </div>
    );
}

export default CountryListPage;
