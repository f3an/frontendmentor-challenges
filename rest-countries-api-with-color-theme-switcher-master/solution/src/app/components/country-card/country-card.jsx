import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function CountryCard({ countries, theme }) {
    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                countries.map((item) => {
                    return (
                        <Link
                            to={`/${item.name.common}`}
                            key={item.name.common}
                            style={{ textDecoration: 'none' }}
                        >
                            <section
                                key={item.name.common}
                                className={`card ${theme}-card-mode`}
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
                })
            }
        </>
    );
}

export default CountryCard;
