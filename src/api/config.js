import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {

  return Promise.reject(error);
});


instance.interceptors.response.use(
  function ({ data }) {
    console.log(data);

    return data;

  }, function (error) {

    return Promise.reject(error);
  });

export default instance;