import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsFromApi) => setTopics(topicsFromApi));
  }, []);
  return (
    <div className="topics">
      {topics.map((topic, index) => (
        <Link
          className={`individual-topic-${topic.slug} individual-topic`}
          key={`topic-${index}`}
          to={`/topics/${topic.slug}`}
        >
          <div className="individual-topic-link">{topic.slug}</div>
        </Link>
      ))}
    </div>
  );
}
