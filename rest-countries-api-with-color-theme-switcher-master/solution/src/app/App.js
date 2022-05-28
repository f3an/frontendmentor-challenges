import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeContext, themes } from './theme/theme-context';

import Header from './components/header/header';
import CountryList from './components/country-list-page/country-list-page';
import CountryPage from './components/country-page/country-page';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState((state) => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };
    }
    render() {
        return (
            <div className="App">
                <ThemeContext.Provider value={this.state.theme}>
                    <BrowserRouter>
                        <Header
                            changeTheme={this.toggleTheme}
                            theme={this.state.theme}
                        />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <CountryList theme={this.state.theme} />
                                }
                            ></Route>
                            <Route
                                path="/:countryURL"
                                element={
                                    <CountryPage theme={this.state.theme} />
                                }
                            ></Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeContext.Provider>
            </div>
        );
    }
}
