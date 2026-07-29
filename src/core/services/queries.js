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


const coinChart = (coin, currency) => {
  const queryFn = () =>
    api.get(`coins/${coin}/market_chart/range?vs_currency=${currency}&days=7`);
  const queryKey = ["single-coin"];
  return useQuery({ queryKey, queryFn, staleTime });
};

export { getMarket , coinChart };

// export const getSingleCoin = () => {
//     const queryFn = ()
// }
