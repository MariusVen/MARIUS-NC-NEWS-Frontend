export default function ArticleCard({ article }) {
  return (
    <div className="article_list">
      <b>{article.title}</b>
      <br></br>
      <div className="comment_count">
        <b>{article.comment_count}</b> comments <b>{article.votes}</b> votes
      </div>
    </div>
  );
}
