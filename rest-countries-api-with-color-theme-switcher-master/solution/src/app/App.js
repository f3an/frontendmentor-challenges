import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeContext, themes } from './theme/theme-context';

import Header from './components/header/header';
import CountryList from './components/country-list-page/country-list-page';
import CountryPage from './components/country-page/country-page';

function App() {
    const [theme, setTheme] = useState(themes.light);

    let toggleTheme = () => {
        if (theme === 'light') {
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
        console.log(theme);
    };
    return (
        <div className="App">
            <ThemeContext.Provider value={theme}>
                <BrowserRouter>
                    <Header changeTheme={toggleTheme} theme={theme} />
                    <Routes>
                        <Route
                            path="/"
                            element={<CountryList theme={theme} />}
                        ></Route>
                        <Route
                            path="/:countryURL"
                            element={<CountryPage theme={theme} />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
