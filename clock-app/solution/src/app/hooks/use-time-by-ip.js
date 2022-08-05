import { useEffect, useState } from "react";

const useTimeByIp = (ip) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `http://worldtimeapi.org/api/ip/${ip}`;
      try {
        const response = await fetch(url);
        const respdata = await response.json();
        if (respdata.status !== 404) {
          setData(respdata);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [ip]);
  return [data, isLoading, error];
};
export default useTimeByIp;
