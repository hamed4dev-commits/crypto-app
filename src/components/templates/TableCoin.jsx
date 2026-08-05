import { HashLoader } from "react-spinners";
import TableRow from "../modules/TableRow";

const TableCoin = ({ data, error, isLoading, initial, setInitial }) => {
  if (error) return <h3>Something went wrong try agin later</h3>;

  if (isLoading)
    return (
      <div className="h-full grid place-items-center ">
        <HashLoader size={70} color="#000fd8" />
      </div>
    );

  return (
    <table className="w-full ">
      <thead>
        <tr>
          <th>coin</th>
          <th>name</th>
          <th>price</th>
          <th>changes 24H</th>
          <th>market</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        
        {data.data?.map((coin) => (
          <TableRow initial={initial} data={coin} key={coin.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoin;
