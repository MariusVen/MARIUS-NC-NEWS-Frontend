import { useEffect, useState, useContext } from "react";
import { deleteComment, fetchComments } from "../api";
import { UserContext } from "./User";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const { usersFromApps } = useContext(UserContext);

  useEffect(() => {
    fetchComments(Number(article_id)).then((articleFromApi) => {
      setComments(articleFromApi);
    });
  }, [article_id]);

  const authorChecker = (author, comment_id) => {
    if (author === usersFromApps) {
      return (
        <button
          onClick={() => {
            deleteComment(comment_id);
            alert("Comment was deleted");
            window.location.reload(false);
          }}
        >
          Delete
        </button>
      );
    }
  };

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="comments" key={comment.comment_id}>
            <b>Author:</b> {comment.author} | <b>Posted at:</b>{" "}
            {comment.created_at.slice(0, 10)} |{" "}
            {comment.created_at.slice(11, 16)}
            <p>{comment.body}</p>
            {authorChecker(comment.author, comment.comment_id)}
          </div>
        );
      })}
    </div>
  );
}
