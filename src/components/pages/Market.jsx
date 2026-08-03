import axios from "axios";
// import getCoinList  from "../../services/cryptoApi"
import api from "../../core/configs/cryptoApi";
import { useEffect, useState } from "react";
import getCoinList from "../../core/configs/cryptoApi";
import { useGetMarket } from "../../core/services/queries";
import { HashLoader } from "react-spinners";
import TableCoin from "../templates/TableCoin";
import Categories from "../modules/Categories";
import Pagination from "../modules/Pagination";

const Market = () => {
  //  const [currency, setCurrency] = useState("usd");
  const [initial, setInitial] = useState({
    currency: "usd",
    page: 4,
    order: "desc",
  });
  const { data, isLoading, error } = useGetMarket(initial);
  // console.log(initial);

  // console.log(data);
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await api.get(
  //       `coins/markets?vs_currency=usd&per_page=20&page=1&price_change_percentage=24`,
  //     );
  //     console.log(data);
  //   };
  //   getData();
  // }, []);

  if (isLoading)
    return (
      <div className="h-dvh grid place-items-center">
        <HashLoader color="#000fd8" />
      </div>
    );
  return (
    <div className="min-h-dvh grid place-items-center">
      <Categories initial={initial} setInitial={setInitial} />
      <TableCoin
        initial={initial}
        setInitial={setInitial}
        data={data}
        isLoading={isLoading}
        error={error}
        className="relative min-h-[400px]"
      />
      <Pagination initial={initial} setInitial={setInitial} />
    </div>
  );
};

export default Market;
