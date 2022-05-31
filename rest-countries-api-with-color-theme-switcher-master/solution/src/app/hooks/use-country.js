import { useEffect, useState } from 'react';

export const useCountry = (countryName) => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://restcountries.com/v3.1/name/${countryName}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.status !== 404) {
                    setCountry(data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [countryName]);

    return [country];
};
