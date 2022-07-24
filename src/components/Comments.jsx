import { useEffect, useState, useContext } from "react";
import { deleteComment, fetchComments } from "../api";
import { UserContext } from "./User";
import PostComment from "./PostComment";

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
            setComments((comments) => {
              return comments.filter(
                (comment) => comment.comment_id !== comment_id
              );
            });
          }}
        >
          Delete
        </button>
      );
    }
  };
  const showPostComment = () => {
    if (usersFromApps === undefined) {
      return <p>Please log in to comment </p>;
    } else {
      return <PostComment article_id={article_id} setComments={setComments} />;
    }
  };
  return (
    <div>
      {showPostComment()}
      {comments.map((comment, index) => {
        return (
          <div
            className="comments"
            key={comment.comment_id || `review-${index}`}
          >
            <div className="comment-header">
              <div className="comment-header-author">
                {" "}
                Posted by {comment.author}
              </div>{" "}
              <div className="comment-header-date">
                &#183; {comment.created_at.slice(0, 10)} |{" "}
                {comment.created_at.slice(11, 16)}{" "}
                {authorChecker(
                  comment.author,
                  comment.comment_id,
                  `review-${index}`
                )}
              </div>
            </div>{" "}
            <div className="comment-body">
              <p>{comment.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
