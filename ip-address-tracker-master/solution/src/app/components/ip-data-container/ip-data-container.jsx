import React from 'react';

import './ip-data-container.css';

function IpDataContainer({ ipAdrress, location, isp }) {
    return (
        <div className="ip-data-container">
            <ul className="list">
                <li>
                    <label htmlFor="ip-address">IP ADDRESS</label>
                    <div id="ip-address">
                        {!ipAdrress ? 'Loading...' : ipAdrress}
                    </div>
                </li>
                <li>
                    <label htmlFor="location">LOCATION</label>
                    <div id="location">
                        {!location
                            ? 'Loading...'
                            : `${Object.values(location)[0]},
                        ${Object.values(location)[1]}`}
                    </div>
                </li>
                <li>
                    <label htmlFor="timezone">TIMEZONE</label>
                    <div id="timezone">
                        {!location ? 'Loading...' : Object.values(location)[2]}
                    </div>
                </li>
                <li>
                    <label htmlFor="isp">ISP</label>
                    <div id="isp">{!isp ? 'Lodaing...' : isp}</div>
                </li>
            </ul>
        </div>
    );
}

export default IpDataContainer;
