import axios from "axios";

const http2 = axios.create({
  baseURL: process.env.REACT_APP_SERVER2,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
  },
});
export default http2;
