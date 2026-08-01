import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useCoinChart, getMarket } from "../../core/services/queries";
import { useParams, useSearchParams } from "react-router";
import { converteData } from "../helpers/convertData";
import { useState } from "react";

const CoinDetails = () => {
  const [type, setType] = useState("prices");
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const currency = searchParams.get("currency") || "usd";

  const {
    data: marketData,
    isLoading: isMarketLoading,
    error: marketError,
  } = getMarket();
  const {
    data: chartData,
    isLoading: isChartLoading,
    error: chartError,
  } = useCoinChart(id, currency);

  const coin = marketData?.data?.find((item) => item.id === id);

  if (isMarketLoading || isChartLoading) {
    return <div>Loading coin details...</div>;
  }

  if (marketError || chartError) {
    return <div>Unable to load coin details.</div>;
  }

  const typeHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      const type = e.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
      console.log(type);
    }
  };

  return (
    <div className="p-6 text-white">
      <div className="flex items-center gap-4">
        <img src={coin?.image} alt={coin?.name} className="w-16 h-16" />
        <div>
          <h1 className="text-3xl font-bold">{coin?.name}</h1>
          <p className="text-gray-400 uppercase">{coin?.symbol}</p>
        </div>
      </div>
      <div>
        <ChartComponent
          data={converteData(chartData, type)}
          type={type}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6" onClick={typeHandler}>
        <div className="rounded-lg bg-gray-900 p-4">
          <p>Current price</p>
          <strong>{coin?.current_price?.toLocaleString()}</strong>
        </div>
        <div className="rounded-lg bg-gray-900 p-4">
          <p>Market cap</p>
          <strong>{coin?.market_cap?.toLocaleString()}</strong>
        </div>
        <div className="rounded-lg bg-gray-900 p-4">
          <p>24h change</p>
          <strong>{coin?.price_change_percentage_24h?.toFixed(2)}%</strong>
        </div>
        <div className="rounded-lg bg-gray-900 p-4">
          <p>Volume</p>
          <strong>{coin?.total_volume?.toLocaleString()}</strong>
        </div>
      </div>

      <div className="mt-6">
        {/* <pre>{JSON.stringify(chartData?.data, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default CoinDetails;

const ChartComponent = ({ data, type }) => {
  console.log(data)
  return;
  <ResponsiveContainer width="100%" height="100%">
    <LineChart width={500} height={500} data={data}>
      <CartesianGrid />
      <Line
        type={"monotone"}
        dataKey={type}
        stroke="blueviolet"
        strokeWidth={"2px"}
      />
      <YAxis dataKey={type} domain={["auto" , "auto"]} />
      <XAxis dataKey={"date"}  />
      <Tooltip />
      <Legend />
    </LineChart>
  </ResponsiveContainer>;
};
