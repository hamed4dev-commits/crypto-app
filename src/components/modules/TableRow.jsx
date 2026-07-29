import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";

const TableRow = ({ data }) => {
  const {
    id,
    name,
    image,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
    symbol,
  } = data;
  return (
    <tr className="odd:bg-gray-800 border-0 rounded-full text-wrap">
      <td>
        <div className="flex justify-evenly text-wrap">
          <img src={image} alt={name} className="w-5" />
          {symbol.toUpperCase()}
        </div>
      </td>
      <td>{name}</td>
      <td>{current_price.toLocaleString()}</td>
      <td style={price_change>0 ?{"color":"#3DDC97"} : {"color":"#FF495C"}}>{price_change.toFixed(2)}</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>{price_change > 0 ? <PiChartLineUpLight color="3DDC97"/>
 : <PiChartLineDownLight color="FF495C" />
}</td>
    </tr>
  );
};

export default TableRow;
