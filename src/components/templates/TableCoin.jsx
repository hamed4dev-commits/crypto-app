import { HashLoader } from "react-spinners";
import TableRow from "../modules/TableRow";

const TableCoin = ({ data, isLoading, error }) => {
  if (error) return console.log(error);
  if (isLoading)
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <HashLoader 
        size={80} />
      </div>
    );

  return (
    <table className="w-full gap">
      <thead>
        <tr className="nth-last: mr-3">
          <th>coin</th>
          <th>name</th>
          <th>price</th>
          <th>changes 24H</th>
          <th>market</th>
          <th >status</th>
        </tr>
      </thead>
      <tbody>
        {data.data?.map((coin) => (
          <TableRow data={coin} key={coin.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoin;
