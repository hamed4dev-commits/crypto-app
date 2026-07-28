import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((request) => {
  request.headers["x_cg_demo_api_key"] = import.meta.env.VITE_API_KEY;
  return request;
});
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    await console.log(error);
  },
);

export default api;

// const getCoinList = () => {
//   return `${import.meta.env.VITE_BASE_URL}coins/markets?vs_currency=usd&per_page=20&page=1&price_change_percentage=24&x_cg_demo_api_key=${import.meta.env.VITE_API_KEY}`;
// };

// export default getCoinList;
