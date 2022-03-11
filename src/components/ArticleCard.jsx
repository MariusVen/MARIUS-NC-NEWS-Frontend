import { Link } from "react-router-dom";
export default function ArticleCard({ article }) {
  return (
    <div className="article_list">
      <Link to={`/articles/${article.article_id}`}>
        <b>{article.title}</b>
      </Link>
      <br></br>
      <div className="comment_count">
        Date: {article.created_at.slice(0, 10)}
        <br></br>
        <b>{article.comment_count}</b> comments <b>{article.votes}</b> votes
      </div>
    </div>
  );
}
