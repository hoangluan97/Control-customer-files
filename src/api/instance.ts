import axios from "axios";

export const httpApi = axios.create({
  baseURL: "http://localhost:3000/",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Credentials": true,
  // },
});
