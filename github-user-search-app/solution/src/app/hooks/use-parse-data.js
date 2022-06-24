import { useEffect, useState } from "react";
import iconLocation from "../assets/icon-location.svg";
import site from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";

function useParseData(userData, theme) {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    if (userData !== null && userData.hasOwnProperty("message") === false) {
      const joinDate = new Date(userData.created_at);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const userLocation = <img src={iconLocation} alt="icon-location" />;
      const userWebsite = <img src={site} alt="user-website" />;
      const userTwitter = <img src={twitter} alt="user-twitter" />;
      const userCompany = <img src={company} alt="user-company" />;

      setData(
        <>
          <div className={`user-base-info`}>
            <img
              src={userData.avatar_url}
              alt="avatar"
              className="user-avatar"
            />
            <h1 className="user-display-name">{userData.name}</h1>
            <h3 className="user-username">@{userData.login}</h3>

            <h4 className="user-join-date">
              Joined
              {` ${joinDate.getDate()} ${
                monthNames[joinDate.getUTCMonth()]
              } ${joinDate.getFullYear()}`}
            </h4>

            {userData.bio ? (
              <h4 className="user-bio">{userData.bio}</h4>
            ) : (
              <h4 className="no-user-bio">This profile heve no bio</h4>
            )}
          </div>

          <div
            className={`user-minimal-statistic  ${theme}-user-minimal-statistic`}
          >
            <div>
              <label htmlFor="repos">
                <h3 style={{ margin: 0, padding: 0 }}>Repos</h3>
              </label>
              <h2 id="repos">{userData.public_repos}</h2>
            </div>
            <div>
              <label htmlFor="followers">
                <h3 style={{ margin: 0, padding: 0 }}>Followers</h3>
              </label>
              <h2 id="followers">{userData.followers}</h2>
            </div>

            <div>
              <label htmlFor="following">
                <h3 style={{ margin: 0, padding: 0 }}>Following</h3>
              </label>
              <h2 id="following">{userData.following}</h2>
            </div>
          </div>

          <div className="user-additional-info">
            <div className="location">
              <label htmlFor="location">{userLocation}</label>
              <h4 id="location">{userData.location}</h4>
            </div>

            <div className="blog">
              <label htmlFor="blog">{userWebsite}</label>
              <h4 id="blog">{userData.blog}</h4>
            </div>

            <div className="user-twitter">
              <label htmlFor="user-twitter">{userTwitter}</label>
              {userData.twitter_username ? (
                <h4 id="user-twitter">{userData.twitter_username}</h4>
              ) : (
                <h4 id="user-twitter">Not avalible</h4>
              )}
            </div>

            <div className="user-company">
              <label htmlFor="user-company">{userCompany}</label>
              <h4 id="user-company">{userData.company}</h4>
            </div>
          </div>
        </>
      );
    }
  }, [userData, theme]);

  return data;
}

export default useParseData;
