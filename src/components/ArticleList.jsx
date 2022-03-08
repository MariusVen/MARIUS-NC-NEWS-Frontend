import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
