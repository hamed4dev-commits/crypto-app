import { useQuery } from "@tanstack/react-query";
import api from "../configs/cryptoApi";

const staleTime = 1000 * 60 * 2;

const useGetMarket = (initial) => {
  const queryFn = () =>
    api.get(
      `coins/markets?vs_currency=${initial?.currency}&per_page=20&page=${initial?.page}&order=market_cap_${initial?.order}&price_change_percentage=24`,
    );
  const queryKey = ["all-market",initial];
  return useQuery({ queryKey, queryFn, staleTime });
};

const useCoinChart = (coin, currency = "usd") => {
  const queryFn = () =>
    api.get(`coins/${coin}/market_chart?vs_currency=${currency}&days=7`);
  const queryKey = ["chart-coin", coin, currency];
  return useQuery({ queryKey, queryFn, staleTime });
};

const useSingleCoin = (coin) => {
  const queryFn = () => api.get(`coins/${coin}`);
  const queryKey = ["single-coin", coin];
  return useQuery({ queryKey, queryFn, staleTime });
};

export { useGetMarket, useCoinChart, useSingleCoin };

// export const getSingleCoin = () => {
//     const queryFn = ()
// }
