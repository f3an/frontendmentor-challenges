import './App.css';
import Header from './components/header/header';
import useYourIp from './hooks/use-your-ip';
import React, { useState } from 'react';
import IpDataContainer from './components/ip-data-container/ip-data-container';

const Context = React.createContext();

function App() {
    const [val, setVal] = useState();
    const ipData = useYourIp(val);

    return (
        <div className="App">
            <Context.Provider value={[val, setVal]}>
                <Header Context={Context} />
                <IpDataContainer ipData={ipData} />
            </Context.Provider>
        </div>
    );
}

export default App;
