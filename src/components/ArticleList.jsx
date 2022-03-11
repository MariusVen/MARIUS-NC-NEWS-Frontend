import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import Sorting from "./Sorting";

export default function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortType, setSortType] = useState("created_at");
  const [sortAscDesc, setSortAscDesc] = useState("asc");

  useEffect(() => {
    fetchArticles(topic, sortType, sortAscDesc)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
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
  }, [topic, sortType, sortAscDesc]);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return (
      <h2>
        {error.status}: {error.msg}
      </h2>
    );
  }

  return (
    <div>
      <Sorting
        sortType={sortType}
        sortAscDesc={sortAscDesc}
        setSortType={setSortType}
        setSortAscDesc={setSortAscDesc}
      />
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
