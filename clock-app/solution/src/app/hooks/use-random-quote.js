import { useEffect, useState } from "react";

export const useRandomQuotes = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    const theRandomNumber = Math.floor(Math.random() * 10);
    const fetchData = async () => {
      setIsLoading(true);
      const url =
        "https://programming-quotes-api.herokuapp.com/Quotes?count=10";
      try {
        const response = await fetch(url);
        const respdata = await response.json();
        if (respdata.status !== 404) {
          setData(respdata[theRandomNumber]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return [data, isLoading, error];
};
