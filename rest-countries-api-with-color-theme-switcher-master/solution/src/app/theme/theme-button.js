import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <div id="mode" {...props} className={theme}>
                <i className="fa-solid fa-moon"></i>
                Mode
            </div>
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
