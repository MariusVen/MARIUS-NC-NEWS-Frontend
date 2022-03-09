import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchComments } from "../api";

export default function Comments({ article_id2 }) {
  console.log(article_id2, "!!!!!!!!!!!!!!!!");
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(Number(article_id2)).then((articleFromApi) => {
      setComments(articleFromApi);
    });
  }, [article_id2]);

  return (
    <div>
      {comments.map((comment) => {
        return <p key={comment.comment_id}>{comment.body}</p>;
      })}
    </div>
  );
}
