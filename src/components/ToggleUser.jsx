import { useState, useContext, useEffect } from "react";
import { UserContext } from "./User";
import { fetchUser } from "../api";

export default function ToggleUser() {
  const { usersFromApps, setUsersFromApps } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetchUser(usersFromApps).then((userDataFromApi) =>
      setUserData(userDataFromApi)
    );
  }, [usersFromApps]);

  if (usersFromApps === undefined || usersFromApps === "") {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUsersFromApps(user);
          setUser("");
        }}
      >
        <label>
          Log in:
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <button type="submit">Log in </button>
        </label>
      </form>
    );
  } else {
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
          <button
            onClick={() => {
              setUsersFromApps();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    );
  }
}
