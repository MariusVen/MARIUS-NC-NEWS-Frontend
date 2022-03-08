import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route path="/topics" element={<ArticleList />} />
          <Route path="/topics/:topic" element={<ArticleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
