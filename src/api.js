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

export const fetchArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const deleteComment = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};
