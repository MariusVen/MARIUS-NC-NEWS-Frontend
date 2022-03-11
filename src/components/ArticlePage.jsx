import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle, updateVote } from "../api";
import { Link } from "react-router-dom";
import Comments from "./Comments";

export default function ArticlePage({ showComments }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vote, setVote] = useState();

  if (showComments === undefined) {
    showComments = false;
  }

  const [isCommentVisible, setIsCommentVisible] = useState(true);

  const showCommentsFunc = () => {
    if (isCommentVisible === true) {
      return <Comments article_id={article_id} />;
    }
  };

  const updateVotesLocally = (voteCrement) => {
    setVote(voteCrement + vote);
  };

  let date = article.created_at;

  if (date !== undefined) {
    date = article.created_at.slice(0, 10);
  }

  useEffect(() => {
    fetchArticle(Number(article_id))
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
        console.log(articleFromApi.votes);
        setVote(articleFromApi.votes);
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
      <hr></hr>
      <div>
        <b>Author: </b>
        {article.author} | <b>Topic: </b>
        {article.topic} | <b>Created at: </b>
        {date}
      </div>
      <p>{article.body}</p>
      <div>
        <button
          onClick={() => {
            setIsCommentVisible(!isCommentVisible);
          }}
        >
          <Link to={`/articles/${article.article_id}/comments`}></Link>
          <b>Comments: </b>
          {article.comment_count}
        </button>
        <b> Votes:</b>{" "}
        <button
          onClick={() => {
            updateVote(article.article_id, 1);
            updateVotesLocally(1);
          }}
        >
          &#8679;
        </button>
        {vote}
        <button
          onClick={() => {
            updateVote(article.article_id, -1);
            updateVotesLocally(-1);
          }}
        >
          &#8681;
        </button>
        {showCommentsFunc()}
      </div>
    </div>
  );
}
