import { useState, useContext } from "react";
import { UserContext } from "./User";

export default function ToggleUser() {
  const { usersFromApps, setUsersFromApps } = useContext(UserContext);
  const [user, setUser] = useState("");

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
          <button type="submit"> Log in </button>
        </label>
      </form>
    );
  } else {
    return (
      <div>
        Logged in as: <b>{usersFromApps}</b>
        <button
          onClick={() => {
            setUsersFromApps();
          }}
        >
          Log out
        </button>
      </div>
    );
  }
}
