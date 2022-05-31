import { useEffect, useState } from 'react';

const API_Key = 'at_tTnGlRIUwqtzWaCmM2YLj7Jr5tzt4';

const useSearchByIp = (ip) => {
    const [ipData, setIpdata] = useState({});

    useEffect(() => {
        const url =
            ip === undefined
                ? `https://geo.ipify.org/api/v2/country?apiKey=${API_Key}`
                : `https://geo.ipify.org/api/v2/country?apiKey=${API_Key}&ipAddress=${ip}`;
        const fetchData = () => {
            fetch(url)
                .then((res) => res.json())
                .then((res) => setIpdata(res))
                .catch((e) => console.log(e));
        };
        fetchData();
    }, [ip]);
    return ipData;
};
export default useSearchByIp;
