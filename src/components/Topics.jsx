import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsFromApi) => setTopics(topicsFromApi));
  }, []);
  return (
    <div>
      {topics.map((topic) => (
        <button key={topic.slug} onClick={() => window.location.reload(false)}>
          <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
        </button>
      ))}
    </div>
  );
}
