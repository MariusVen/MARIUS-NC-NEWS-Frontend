import axios from "axios";

const baseURL = "https://nc-news-example-seminar-3-6.herokuapp.com/api";

export const fetchArticles = (topic) => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};
