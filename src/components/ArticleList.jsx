import { useEffect, useState } from "react";
import { fetchArticles } from "../api";

export default function Header() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articlesFromApi) => setArticles(articlesFromApi));
  });

  return (
    <div>
      <div>
        {articles.map((article) => (
          <p className="article_list" key={article.article_id}>
            {article.title} <b>{article.comment_count}</b> comments{" "}
            <b>{article.votes}</b> votes
          </p>
        ))}
      </div>
    </div>
  );
}
