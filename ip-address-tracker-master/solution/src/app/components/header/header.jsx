import './header.css';
import React, { useContext } from 'react';
import arrow from '../../images/icon-arrow.svg';

function Header({ Context }) {
    const [, setVal] = useContext(Context);
    const clickHendler = () => {
        setVal(document.getElementById('search-by-ip').value);
    };

    return (
        <div className="header">
            <h1>IP Addres Tracker</h1>
            <div className="search-container">
                <input
                    id="search-by-ip"
                    className="search"
                    type="text"
                    placeholder="Search for any IP addres or domain"
                />
                <button className="btn" onClick={clickHendler}>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
    );
}

export default Header;
