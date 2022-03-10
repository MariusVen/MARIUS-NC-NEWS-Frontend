import { useState, useContext } from "react";
import { postComment } from "../api";
import { UserContext } from "./User";

export default function PostComment({ article_id, comments, setComments }) {
  const [postText, setPostText] = useState();
  const { usersFromApps } = useContext(UserContext);
  const date = new Date();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setComments((comments) => [
          {
            article_id: date.toISOString(),
            body: postText,
            author: usersFromApps,
            created_at: date.toISOString(),
            votes: 0,
          },
          ...comments,
        ]);
        setPostText("");
        postComment(article_id, postText, usersFromApps);
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
