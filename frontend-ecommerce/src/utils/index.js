import axios from "axios";

const loginUrl = "https://strapi-store-server.onrender.com/api";
const localUrl = "http://127.0.0.1:5000/";
const productionUrl = "";

export const loginFetch = axios.create({
  baseURL: loginUrl,
});
export const productsFetch = axios.create({
  baseURL: localUrl,
});
