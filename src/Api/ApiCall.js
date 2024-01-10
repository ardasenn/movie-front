import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access-token-moviestore");
    const refreshToken = localStorage.getItem("refresh-token-moviestore");
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.refreshToken = refreshToken;
    config.headers["Content-Type"] = "application/json";
    config.withCredentials = true;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/Auth/Register`,
    input
  );
  return data;
};

export const fetchLogin = async (input) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/Auth/Login`,
    input
  );
  return response.data;
};
export const getMovies = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/Movie/AllMovies`
    );
    return data;
  } catch (error) {
    console.log(error, "error");
  }
};
