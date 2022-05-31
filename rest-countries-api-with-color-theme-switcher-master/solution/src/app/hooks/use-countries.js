import { useEffect, useState } from 'react';

export const useCountries = (region, search) => {
    const [isLoading, setIsLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');

    const getCountriesUrl = (region, search) => {
        if (search !== '') {
            return `https://restcountries.com/v3.1/name/${search}`;
        }

        if (region === 'all' || region === '') {
            return 'https://restcountries.com/v3.1/all';
        }

        return `https://restcountries.com/v3.1/region/${region}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const url = getCountriesUrl(region, search);

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.status !== 404) {
                    setCountries(data);
                }
            } catch (err) {
                setError(
                    'There has been a problem with your fetch operation: ' +
                        err.message
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [region, search]);

    return [countries, isLoading, error];
};
