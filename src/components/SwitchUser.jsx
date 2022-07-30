import React from "react";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "./User";
import { fetchUsers } from "../api";

export default function SwitchUser() {
  const { setUsersFromApps } = useContext(UserContext);
  const [usersData, setUsersData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((userDataFromApi) => {
        setUsersData(userDataFromApi.users);
        setIsLoading(false);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setIsLoading(false);
          setError({ msg, status });
        }
      );
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return (
      <h2>
        {error.status}: {error.msg}
      </h2>
    );
  }
  return (
    <div className="switch-user-page">
      <h1>Please select user:</h1>
      <div className="switch-user-page-grid">
        {usersData.map((user) => {
          return (
            <div className="switch-user-page-single-grid" key={user.name}>
              <button
                className="switch-user-page-single-grid-choose-user-button"
                onClick={() => {
                  setUsersFromApps(user.username);
                }}
              >
                <div>
                  <img
                    className="switch-user-page-single-grid-user-image"
                    src={`${user.avatar_url}`}
                    alt="user avatar"
                  ></img>
                </div>
                <div>
                  <b>Username:</b> {user.username}
                  <br></br> <b>Name:</b> {user.name}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
