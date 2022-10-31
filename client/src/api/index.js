import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

// AUTH
export const register = (inputs) => API.post("/auth/register", inputs);
export const login = (inputs) => API.post("/auth/login", inputs);
export const logout = () => API.post("/auth/logout");

// POSTS
export const getPosts = (cat) => API.get(`/posts${cat}`);
export const getPostsByCat = (cat) => API.get(`/posts?cat=${cat}`);
export const getPost = (postId) => API.get(`/posts/${postId}`);
export const deletePost = (postId) => API.delete(`/posts/${postId}`);

// UPLOAD IMG POST
export const upload = (formData) => API.delete(`/upload`, formData);
