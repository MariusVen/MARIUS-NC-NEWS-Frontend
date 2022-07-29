import axios from "axios";

const baseURL = "https://marius-nc-news.herokuapp.com/api";

export const fetchArticles = (topic, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, sort_by: sort_by, order_by: order },
    })
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

export const updateVote = (article_id, inc) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, { inc_votes: inc });
};

export const postComment = (article_id, body, username) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      body: body,
      username: username,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const fetchUser = (username) => {
  return axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data;
  });
};
export const fetchUsers = () => {
  return axios.get(`${baseURL}/users/`).then(({ data }) => {
    return data;
  });
};
