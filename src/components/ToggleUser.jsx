import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./User";
import { fetchUser } from "../api";

export default function ToggleUser() {
  const { usersFromApps } = useContext(UserContext);
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser(usersFromApps)
      .then((userDataFromApi) => {
        setUserData(userDataFromApi);
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
  }, [usersFromApps]);
  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return (
      <h2>
        {error.status}: {error.msg}
      </h2>
    );
  }
  return (
    <div className="header-right-side">
      <div className="header-right-side-user-logo">
        <img
          className="header-right-side-user-logo-image"
          src={`${userData.user.avatar_url}`}
          alt="user avatar"
        ></img>
      </div>{" "}
      <div className="header-right-side-text">
        {usersFromApps}
        <Link to={"/switchUser/"}>
          <button onClick={() => {}}>switch</button>
        </Link>
      </div>
    </div>
  );
}
