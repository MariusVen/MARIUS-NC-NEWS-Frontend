import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../api";
import Comments from "./Comments";
import ArticleCard from "./ArticleCard";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <ArticleCard article={article}></ArticleCard>
      <Comments article_id={article_id} />
    </div>
  );
}
