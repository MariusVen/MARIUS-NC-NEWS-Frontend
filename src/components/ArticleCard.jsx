import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateVote } from "../api";
import { fetchArticle } from "../api";
export default function ArticleCard({ article }) {
  const [voteCountFromApi, setVoteCountFromApi] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voteStatus, setVoteStatus] = useState(0);

  const updateVotesLocally = (voteIncrement) => {
    setVoteCountFromApi(voteIncrement + voteCountFromApi);
  };

  useEffect(() => {
    fetchArticle(Number(article.article_id))
      .then((articleFromApi) => {
        setIsLoading(false);
        setVoteCountFromApi(articleFromApi.votes);
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
  }, [article.article_id]);

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <h2>
        {error.status}: {error.msg}
      </h2>
    );

  return (
    <div className="front-page-body">
      <div className="vote">
        <button
          className={`green-arrow green-arrow-${voteStatus} `}
          onClick={() => {
            if (voteStatus === 0) {
              updateVote(article.article_id, 1);
              updateVotesLocally(1);
              setVoteStatus(1);
            } else if (voteStatus === -1) {
              updateVote(article.article_id, 1);
              updateVotesLocally(1);
              setVoteStatus(0);
            }
          }}
        >
          &#8679;
        </button>
        {voteCountFromApi}{" "}
        <button
          className={`red-arrow red-arrow-${voteStatus}`}
          onClick={() => {
            if (voteStatus === 0) {
              setVoteStatus(-1);
              updateVote(article.article_id, -1);
              updateVotesLocally(-1);
            } else if (voteStatus === 1) {
              setVoteStatus(0);
              updateVote(article.article_id, -1);
              updateVotesLocally(-1);
            }
          }}
        >
          &#8681;
        </button>
      </div>
      <div className="front-page-article-card">
        <div className="front-page-article-card-header">
          <div
            className={`front-page-article-card-header-logo-${article.topic}`}
          >
            "."
          </div>
          <Link
            className="front-page-article-card-header-topic"
            to={`/topics/${article.topic}`}
          >
            <b>topics/{article.topic}</b>
          </Link>
          <div className="front-page-article-card-header-author">
            &#183; Posted by {article.author} &#183;{" "}
            {article.created_at.slice(0, 10)}
          </div>
        </div>
        <div className="front-page-article-card-body-title">
          <Link
            className="front-page-article-card-body-title-link"
            to={`/articles/${article.article_id}`}
          >
            {article.title}
          </Link>
        </div>
        <div className="front-page-article-card-body">
          <Link
            className="front-page-article-card-body-link"
            to={`/articles/${article.article_id}`}
          >
            {article.body}
          </Link>
        </div>

        <div className="front-page-article-card-footer">
          <Link
            className="front-page-article-card-footer-comment-logo"
            to={`/articles/${article.article_id}`}
          >
            &#9993;{" "}
          </Link>

          <div>
            <Link
              className="front-page-article-card-footer-comment"
              to={`/articles/${article.article_id}`}
            >
              {article.comment_count} comments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
