import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(topic).then((articlesFromApi) =>
      setArticles(articlesFromApi)
    );
  }, [topic]);

  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
