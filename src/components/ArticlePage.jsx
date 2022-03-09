import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../api";
import { Link } from "react-router-dom";
import Comments from "./Comments";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  // const [article_id2, setArticle_id2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let date = article.created_at;

  if (date !== undefined) {
    date = article.created_at.slice(0, 10);
  }

  useEffect(() => {
    fetchArticle(Number(article_id))
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setIsLoading(false);
          setError({ msg, status });
        }
      );
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <h2>
        {error.status}: {error.msg}
      </h2>
    );
  return (
    <div className="article_page_body">
      <h1>{article.title}</h1>
      <div>
        <b>Author: </b>
        {article.author} | <b>Topic: </b>
        {article.topic} | <b>Created at: </b>
        {date}
      </div>
      <p>{article.body}</p>
      <div>
        <b>Comments: </b>
        {article.comment_count}
        {/* <button onClick={() => setArticle_id2(article.article_id)}>
          <Link to={`/articles/${article.article_id}/comments`}>
            
          </Link>
          
        </button> */}
        <b> Votes:</b> <b>&#8679;</b> {article.votes} <b>&#8681;</b>
        {/* <Comments article_id2={article_id2} /> */}
      </div>
    </div>
  );
}
