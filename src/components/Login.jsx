import React from "react";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "./User";
import { fetchUsers } from "../api";

export default function Login() {
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
    <div>
      <h1>Please select user:</h1>
      {usersData.map((user) => {
        return (
          <div>
            <button
              onClick={() => {
                setUsersFromApps(user.username);
              }}
            >
              {user.username}
            </button>
          </div>
        );
      })}
    </div>
  );
}
