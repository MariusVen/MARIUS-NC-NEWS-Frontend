import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./components/ArticlePage";
import { useState } from "react";
import { UserContext } from "./components/User";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [usersFromApps, setUsersFromApps] = useState("tickle122");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ usersFromApps, setUsersFromApps }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path={"/"} element={<ArticleList />} />
            <Route path={"*"} element={<ErrorPage />} />
            <Route path={"/topics"} element={<ArticleList />} />
            <Route path={"/topics/:topic"} element={<ArticleList />} />
            <Route path={"/articles/:article_id"} element={<ArticlePage />} />
            <Route
              path="/articles/:article_id/comments"
              element={<ArticlePage />}
            />
            <Route path={"/users/:user_id"} element={<ArticlePage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
