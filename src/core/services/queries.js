import { useQuery } from "@tanstack/react-query";
import api from "../configs/cryptoApi";

export const getMarket = () => {
  const queryFn = () =>
    api.get(
      "coins/markets?vs_currency=usd&per_page=20&page=1&price_change_percentage=24",
    );
  const queryKey = ["all-market"];
  return useQuery({ queryKey, queryFn, staleTime: 1000 * 60 * 2 });
};

// export const getSingleCoin = () => {
//     const queryFn = ()
// }
