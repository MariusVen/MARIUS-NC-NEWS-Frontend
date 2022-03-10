import { useState, useContext } from "react";
import { postComment } from "../api";
import { UserContext } from "./User";

export default function PostComment({ article_id }) {
  const [postText, setPostText] = useState();
  const { usersFromApps } = useContext(UserContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setPostText("");
        postComment(article_id, postText, usersFromApps);
        alert(`Dear ${usersFromApps} your comment was posted`);
        window.location.reload(false);
      }}
    >
      <label>
        Write comment:
        <input
          type="text"
          onChange={(e) => {
            setPostText(e.target.value);
          }}
        />
      </label>
      <button>Post</button>
    </form>
  );
}
