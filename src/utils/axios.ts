import axios from "axios";

export const api = axios.create({
  baseURL: "https://news-post-checker-backend.fly.dev",
});

export const localApi = axios.create({
  baseURL: "http://localhost:8080",
});
