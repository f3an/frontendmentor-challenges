import { useState } from "react";
import "./App.css";
import useGetIp from "./hooks/use-getip";
import { useRandomQuotes } from "./hooks/use-random-quote";
import useTimeByIp from "./hooks/use-time-by-ip";

function App() {
  const [theme, setTheme] = useState("Light");
  const [quoute, quoteIsLoading] = useRandomQuotes();
  // const [ipData, ipDataIsLoading] = useGetIp();
  const [time, timeIsLoading] = useTimeByIp("8.8.8.8");

  if (quoteIsLoading !== true && quoteIsLoading !== undefined) {
    console.log(quoute.en);
  }

  // if (ipDataIsLoading !== true && ipDataIsLoading !== undefined) {
  //   console.log(ipData.ip);
  // }

  if (timeIsLoading !== true && timeIsLoading !== undefined) {
    console.log(time);
  }

  return <div className={`cloack-app ${theme}-body`}></div>;
}

export default App;
