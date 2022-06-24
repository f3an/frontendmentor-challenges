import React from "react";
import useParseData from "../../hooks/use-parse-data";
import "./user-page.css";

function UserPage({ userData, theme }) {
  const data = useParseData(userData, theme);

  return (
    <>
      <div className={`user-container ${theme}-user-container`}>{data}</div>
    </>
  );
}
export default UserPage;
