import axios from "axios";
// import getCoinList  from "../../services/cryptoApi"
import api from "../../core/configs/cryptoApi";
import { useEffect } from "react";
import getCoinList from "../../core/configs/cryptoApi";
import { getMarket } from "../../core/services/queries";
import { HashLoader } from "react-spinners";
import TableCoin from "../templates/TableCoin";
import Categories from "../modules/Categories";

const Market = () => {
  const { data, isLoading, error } = getMarket();
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
  if (isLoading) return <HashLoader color="#000fd8" />;
  return (
    <div className="h-dvh grid place-items-center">
      <Categories />
      <TableCoin
        data={data}
        isLoading={isLoading}
        error={error}
        className="relative min-h-[400px]"
      />
      <div>paginate</div>
    </div>
  );
};

export default Market;
