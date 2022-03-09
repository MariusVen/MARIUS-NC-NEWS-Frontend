import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchComments } from "../api";

export default function Comments({ article_id: article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(Number(article_id)).then((articleFromApi) => {
      setComments(articleFromApi);
    });
  }, [article_id]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="comments" key={comment.comment_id}>
            <b>Author:</b> {comment.author} | <b>Posted at:</b>{" "}
            {comment.created_at.slice(0, 10)} |{" "}
            {comment.created_at.slice(11, 16)}
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}
