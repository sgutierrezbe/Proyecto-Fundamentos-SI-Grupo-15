import axios from "axios";

const productionUrl = "https://localhost:3000/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
