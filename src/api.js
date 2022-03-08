import axios from "axios";

const baseURL = "https://nc-news-example-seminar-3-6.herokuapp.com/api";

export const fetchArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};
