import { useState, useContext } from "react";
import { postComment } from "../api";
import { UserContext } from "./User";

export default function PostComment({ article_id, setComments }) {
  const [postText, setPostText] = useState();
  const { usersFromApps } = useContext(UserContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (postText === "") {
          return "testing";
        } else {
          setPostText("");
          postComment(article_id, postText, usersFromApps).then((comment) => {
            setComments((currComments) => {
              return [comment, ...currComments];
            });
          });
        }
      }}
    >
      {" "}
      <div className="comment-box">
        <label>
          <input
            className="comment-box-field"
            type="text"
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </label>
        <div>
          <button className="comment-box-button">Comment</button>
        </div>
      </div>
    </form>
  );
}
