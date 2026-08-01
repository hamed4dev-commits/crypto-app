import { useQuery } from "@tanstack/react-query";
import api from "../configs/cryptoApi";

const staleTime = 1000 * 60 * 2;

const getMarket = () => {
  const queryFn = () =>
    api.get(
      "coins/markets?vs_currency=usd&per_page=20&page=1&price_change_percentage=24",
    );
  const queryKey = ["all-market"];
  return useQuery({ queryKey, queryFn, staleTime });
};

const useCoinChart = (coin, currency = "usd") => {
  const queryFn = () =>
    api.get(`coins/${coin}/market_chart?vs_currency=${currency}&days=7`);
  const queryKey = ["chart-coin", coin, currency];
  return useQuery({ queryKey, queryFn, staleTime });
};

const singleCoin = (coin) => {
  const queryFn = () => api.get(`coins/${coin}`);
  const queryKey = ["single-coin", coin];
  return useQuery({ queryKey, queryFn, staleTime });
};

export { getMarket, useCoinChart, singleCoin };

// export const getSingleCoin = () => {
//     const queryFn = ()
// }
