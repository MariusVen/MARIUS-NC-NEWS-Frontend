import { useEffect, useState, useContext } from "react";
import { deleteComment, fetchComments } from "../api";
import { UserContext } from "./User";
import PostComment from "./PostComment";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isPostCommentVisible, setIsPostCommentVisible] = useState(false);
  const { usersFromApps } = useContext(UserContext);
  useEffect(() => {
    fetchComments(Number(article_id)).then((articleFromApi) => {
      setComments(articleFromApi);
    });
  }, [article_id]);
  console.log(comments);
  const authorChecker = (author, comment_id) => {
    if (author === usersFromApps) {
      return (
        <button
          onClick={() => {
            console.log(comment_id, "comment ID when delete pressed");
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
      return <p>Please log in first</p>;
    } else if (isPostCommentVisible === true) {
      return <PostComment article_id={article_id} setComments={setComments} />;
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          setIsPostCommentVisible(!isPostCommentVisible);
        }}
      >
        Write comment
      </button>

      {showPostComment()}
      {comments.map((comment, index) => {
        return (
          <div
            className="comments"
            key={comment.comment_id || `review-${index}`}
          >
            <b>Author:</b> {comment.author} | <b>Posted at:</b>{" "}
            {comment.created_at.slice(0, 10)} |{" "}
            {comment.created_at.slice(11, 16)}
            <p>{comment.body}</p>
            {authorChecker(
              comment.author,
              comment.comment_id,
              `review-${index}`
            )}
          </div>
        );
      })}
    </div>
  );
}
