import { useEffect, useState } from "react";

const authToken = "AUTH_TOKEN";

function useSearchByUsername(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/users/${id}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        });
        const data = await response.json();
        if (data.status !== 404) {
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return [data];
}

export default useSearchByUsername;
