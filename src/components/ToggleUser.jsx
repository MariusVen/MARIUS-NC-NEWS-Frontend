import { useState, useContext, useEffect } from "react";
import { fetchUsers } from "../api";
import { UserContext } from "./User";

export default function ToggleUser() {
  const { usersFromApps, setUsersFromApps } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [user2, setUser2] = useState("testing");
  const [error, setError] = useState(null);

  // console.log(user2);

  // useEffect(() => {
  //   fetchUsers(user).then((userFromApi) => {
  //     setUser2(userFromApi).catch(
  //       ({
  //         response: {
  //           data: { msg },
  //           status,
  //         },
  //       }) => {
  //         setError({ msg, status });
  //       }
  //     );
  //   });
  // }, [user]);

  // if (error)
  //   return (
  //     <h2>
  //       {error.status}: {error.msg}
  //     </h2>
  //   );

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
