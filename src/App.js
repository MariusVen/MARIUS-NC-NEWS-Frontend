import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Comments from "./components/Comments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route path="/topics" element={<ArticleList />} />
          <Route path="/topics/:topic" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route
            path="/articles/:article_id/comments"
            element={<ArticlePage showComments={true} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
