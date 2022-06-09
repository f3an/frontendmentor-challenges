import './App.css';
// eslint-disable-next-line no-unused-vars
import Header from './components/header/header';
import useYourIp from './hooks/use-your-ip';
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import IpDataContainer from './components/ip-data-container/ip-data-container';
import Map from './components/map/map-container';

const Context = React.createContext();

function App() {
    const [val, setVal] = useState();
    const ipData = useYourIp(val);

    return (
        <div className="App">
            <Context.Provider value={[val, setVal]}>
                <Header Context={Context} />
                <IpDataContainer
                    ipAdrress={ipData.ip}
                    location={ipData.location}
                    isp={ipData.isp}
                />
                <Map coordinates={ipData.location} />
            </Context.Provider>
        </div>
    );
}

export default App;
