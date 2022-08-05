import { useEffect, useState } from "react";

const API_Key = "at_2AsyijnrvdAqboByFJsf9M9pTAhhY";

const useGetIp = () => {
  const [ipData, setIpData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_Key}`;
      try {
        const response = await fetch(url);
        const respdata = await response.json();
        if (respdata.status !== 404) {
          setIpData(respdata);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return [ipData, isLoading, error];
};
export default useGetIp;
