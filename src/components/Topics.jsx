import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsFromApi) => setTopics(topicsFromApi));
  }, []);
  return (
    <div>
      <p>
        {topics.map((topic) => (
          <Link key={topic.slug} to={`/articles/${topic.slug}`}>
            {topic.slug}
          </Link>

          // <button
          //   onClick={() => {
          //     setTopic(topic.slug);
          //   }}
          //   key={topic.slug}
          // >
          //   {topic.slug}
          // </button>
        ))}
      </p>
    </div>
  );
}
