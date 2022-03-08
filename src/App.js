import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [topic, setTopic] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <ArticleList topic={topic} /> */}
        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:topic" element={<ArticleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
