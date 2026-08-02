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
    <div className="h-full p-6 text-white">
      <div className="flex items-center gap-4">
        <img src={coin?.image} alt={coin?.name} className="w-16 h-16" />
        <div>
          <h1 className="text-3xl font-bold">{coin?.name}</h1>
          <p className="text-gray-400 uppercase">{coin?.symbol}</p>
        </div>
      </div>
      <div className="min-h-110 w-full">
        <ChartComponent data={converteData(chartData, type)} type={type} />
      </div>

      <div className="flex gap-4 mt-6" onClick={typeHandler}>
        <button className="rounded-lg bg-gray-900 p2 cursor-pointer">
          Prices
        </button>
        <button className="rounded-lg bg-gray-900 p-4 cursor-pointer">
          Market caps
        </button>
        {/* <button className="rounded-lg bg-gray-900 p-4 cursor-pointer">
          24h change
        </button> */}
        <button className="rounded-lg bg-gray-900 p-4 cursor-pointer">
          Total Volumes
        </button>
      </div>

      <div className="mt-6">
        {/* <pre>{JSON.stringify(chartData?.data, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default CoinDetails;

const ChartComponent = ({ data, type }) => {
  if (!data?.length) {
    return <div className="text-gray-400">Chart data is unavailable.</div>;
  }

  return (
    <div className="h-full w-full">
      <ResponsiveContainer height={500} >
        <LineChart data={data}>
          <CartesianGrid stroke="#404042" />
          <Line
            type="monotone"
            dataKey={type}
            stroke="blueviolet"
            strokeWidth={2}
          />
          <YAxis dataKey={type} domain={["auto", "auto"]} />
          <XAxis dataKey="date" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
