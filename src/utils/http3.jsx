import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import Cookies from "universal-cookie";
import { CookieKeys, CookieStorage } from "./cookie";

const http3 = axios.create({
  baseURL: process.env.REACT_APP_SERVER2,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "Application/json",
  },
});


http3.interceptors.request.use(
    (config) => {
        config.headers = {
        ...config.headers,
        Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`
    };
    return config;
},
);

export default http3;
