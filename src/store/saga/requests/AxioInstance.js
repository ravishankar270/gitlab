import axios from "axios";
import { Navigate } from "react-router-dom";

const axioInstance = axios.create({
  baseURL: "http://localhost:3002",
});

axioInstance.interceptors.request.use((config) => {
  if (localStorage.getItem("currenttime")) {
    // checking if the session has expired(time limit 20 minutes)
    if(!localStorage.getItem('token')){
      window.location.href = "/login";
    }
    if (
      new Date(
        new Date().getTime() - new Date(localStorage.getItem("currenttime"))
      ) /
        60000 >20
    ) {
      localStorage.clear();
      window.location.href = "/login";
    }
  }
  config.params = config.params || {};
  if (localStorage.getItem("token")) {
    // passing params to each request
    config.params["token"] = localStorage.getItem("token");
  }
  return config;
});

export default axioInstance;
