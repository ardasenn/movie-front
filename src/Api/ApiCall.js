import axios from "axios";
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access-token-moviestore");
  const refreshToken = localStorage.getItem("refresh-token-moviestore");
  // if (!token && !refreshToken) {
  //   window.location.pathname = "/signin";
  //   return Promise.reject("Token ve refreshToken bulunamadı.");
  // }
  config.headers.Authorization = `Bearer ${token}`;
  config.headers.refreshToken = refreshToken;
  config.headers["Content-Type"] = "application/json";
  config.withCredentials = true;
  return config;
});
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("🚀 ~ error:", error);
    if (error.response.status === 401) {
      window.location.pathname = "/signin";
    }
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
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}/Auth/Login`,
      input
    );
    return response.data;
  } catch (error) {
    console.log(error, "error");
  }
};
export const getMovies = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/Movie/AllMovies`
    );
    return response.data;
  } catch (error) {
    console.log(error, "error");
  }
};
export const giveOrder = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/Customer/GiveOrder`,
    data
  );
  return response.data;
};
export const myOrders = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/Customer/MyOrders/${id}`
  );
  return response.data;
};
export const getMovie = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/Movie/${id}`
  );
  return response.data;
};
export const addComment = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/Comments/CreateComment`,
    data
  );
  return response.data;
};
export const getUserDetail = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/Customer/Details/${id}`
  );
  return response.data;
};
