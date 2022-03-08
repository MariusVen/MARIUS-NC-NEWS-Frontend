import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(topic).then((articlesFromApi) =>
      setArticles(articlesFromApi)
    );
  }, [topic]);

  // let filtered = [];

  // if (topic !== "") {
  //   filtered = articles.filter((article) => article.topic === topic);
  // } else {
  //   filtered = articles;
  // }

  return (
    <div>
      {articles.map((article) => (
        <div className="article_list" key={article.article_id}>
          <b>{article.title}</b>
          <br></br>
          <div className="comment_count">
            <b>{article.comment_count}</b> comments <b>{article.votes}</b> votes
          </div>
        </div>
      ))}
    </div>
  );
}
