import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

import ThemedButton from '../../theme/theme-button';

function Header(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <div className={`${props.theme}-header`} id="header">
            <div id="logo">
                <NavLink
                    exact="true"
                    className={`${
                        // eslint-disable-next-line react/prop-types
                        props.theme
                    }-nav-link`}
                    to="/"
                >
                    <h3>Where in the world?</h3>
                </NavLink>
            </div>

            <ThemedButton
                onClick={
                    // eslint-disable-next-line react/prop-types
                    props.changeTheme
                }
            />
        </div>
    );
}

export default Header;
